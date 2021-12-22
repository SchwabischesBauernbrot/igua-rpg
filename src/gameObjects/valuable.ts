import { Sprite} from "pixi.js";
import {BlueValuable, OrangeValuable} from "../textures";
import {progress} from "../igua/data/progress";
import {smallPop} from "./smallPop";
import {CollectValuable, CollectValuableSmall} from "../sounds";
import {GameObjectArgs} from "../../tools/gen-levelargs/types/gameObjectArgs";
import {player} from "./player";
import {merge} from "../utils/merge";
import {resolveGameObject} from "../igua/level/resolveGameObject";

type ValuableType = keyof typeof valuableStyles;

export function valuable(x, y, uid, type: ValuableType)
{
    const valuableStyle = valuableStyles[type];
    const sprite = merge(Sprite.from(valuableStyle.texture), { collectible: true });
    sprite.position.set(x, y);
    sprite.anchor.set(0.5, 1);

    return sprite.withStep(() => {
        if (sprite.collectible && player.collides(sprite))
        {
            const particle = smallPop(12);
            particle.position.set(sprite.x, sprite.y - 7);

            if (uid)
                progress.flags.objects.gotLevelValuable.add(uid);
            progress.valuables += valuableStyle.value;
            const sound = valuableStyle.sound;
            sound.volume(0.5);
            sound.play();
            sprite.destroy();
        }
    });
}

export const resolveValuableBlue = resolveGameObject("ValuableBlue", resolveValuable);
export const resolveValuableOrange = resolveGameObject("ValuableOrange", resolveValuable);

function resolveValuable(e: GameObjectArgs)
{
    if (e.type === "ValuableOrange" || e.type === "ValuableBlue")
    {
        const uid = e.uid;

        if (!progress.flags.objects.gotLevelValuable.has(uid))
            return valuable(e.x, e.y, uid, e.type);
    }
}

const valuableStyles = {
    ValuableBlue: {
        sound: CollectValuable,
        texture: BlueValuable,
        value: 15
    },
    ValuableOrange: {
        sound: CollectValuableSmall,
        texture: OrangeValuable,
        value: 5
    },
};
