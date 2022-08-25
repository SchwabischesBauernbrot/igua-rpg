import * as PIXI from "pixi.js";
import {isPlayerInteractingWith} from "../../igua/logic/isPlayerInteractingWith";
import {PropertiesOf} from "../types/propertiesOf";
import {CollectGeneric} from "../../sounds";
import {player} from "../../gameObjects/player";
import {scene} from "../../igua/scene";
import {cutscene, Cutscene} from "../../cutscene/cutscene";
import {DisplayObject} from "pixi.js";

declare global {
    namespace PIXI {
        export interface DisplayObject {
            ahead(): this;
            show(parent?: Container): this;
            behind(index?: number): this;
            withInteraction(interaction: () => void): this;
            withCutscene(cutscene: Cutscene): this;
            asCollectible<T>(object: T, key: keyof PropertiesOf<T, boolean>, action?: () => void);
            liveFor(frames: number): this;

            damageSource(d: DisplayObject): this;
            damagePlayer(damage: number): boolean | undefined;
            effectPlayer(effect: 'poison'): boolean | undefined;
            vsPlayerHitCount: number;
        }
    }
}

PIXI.DisplayObject.prototype.show = function (parent = scene.gameObjectStage) {
    return parent.addChild(this);
}

PIXI.DisplayObject.prototype.liveFor = function (frames) {
    return this.withStep(() => {
        if (frames-- <= 0)
            this.destroy();
    });
}

PIXI.DisplayObject.prototype.damageSource = function (d) {
    this.ext.damageSource = d;
    return this;
}

function findDamageSource(self: DisplayObject) {
    const initial = self;

    while (self && !self.ext.damageSource) {
        self = self.parent;
    }
    if (self?.ext?.damageSource)
        return self.ext.damageSource;
    return initial;
}

function incrementVsPlayerHitCount(self: DisplayObject) {
    const source = findDamageSource(self);
    source.ext.vsPlayerHitCount = (source.ext.vsPlayerHitCount ?? 0) + 1;
}

PIXI.DisplayObject.prototype.damagePlayer = function (damage) {
    const result = player.damage(damage);
    if (result)
        incrementVsPlayerHitCount(this);

    return result;
}

PIXI.DisplayObject.prototype.effectPlayer = function (effect) {
    const result = player.effect(effect);
    if (result)
        incrementVsPlayerHitCount(this);

    return result;
}

Object.defineProperties(PIXI.DisplayObject.prototype, {
    vsPlayerHitCount: {
        get: function () {
            return findDamageSource(this).ext.vsPlayerHitCount ?? 0;
        },
        enumerable: false,
        configurable: true,
    },
});

PIXI.DisplayObject.prototype.behind = function (index) {
    if (index === undefined)
        return scene.backgroundGameObjectStage.addChild(this);
    return scene.backgroundGameObjectStage.addChildAt(this, index);
}

PIXI.DisplayObject.prototype.ahead = function () {
    return scene.playerStage.addChild(this);
}

PIXI.DisplayObject.prototype.asCollectible = function (object, key, action)
{
    return this.withStep(() => {
        if (this.ext.collectible !== false && !object[key] && this.collides(player))
        {
            (object as any)[key] = true;
            CollectGeneric.play();
            if (action)
                action();
        }
        if (object[key])
           this.destroy();
    });
}

PIXI.DisplayObject.prototype.withInteraction = function(interaction)
{
    return this.withStep(() => {
        if (isPlayerInteractingWith(this))
            interaction();
    })
}

PIXI.DisplayObject.prototype.withCutscene = function (scene) {
    return this.withInteraction(() => cutscene.play(scene));
}

export default 0;
