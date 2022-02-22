import {scene} from "../igua/scene";
import {JungleTownArgs} from "../levelArgs";
import {applyOgmoLevel} from "../igua/level/applyOgmoLevel";
import {jukebox} from "../igua/jukebox";
import {JungleMusic} from "../musics";
import {mirror} from "../gameObjects/mirror";
import {now} from "../utils/now";
import {advanceTempleMovingWall} from "./jungleTemple";
import {subimageTextures} from "../utils/pixi/simpleSpritesheet";
import {JungleLever} from "../textures";
import {lever} from "../gameObjects/lever";
import {Sprite} from "pixi.js";
import {progress} from "../igua/data/progress";
import {ActivateLever} from "../sounds";
import {show} from "../cutscene/dialog";
import {approachLinear} from "../utils/math/number";

export function JungleTown() {
    jukebox.play(JungleMusic);
    scene.backgroundColor = 0x97D8D8;
    scene.terrainColor = 0x79962E;
    const level = applyOgmoLevel(JungleTownArgs);
    mirror(38, 30, 0xB7B7E2, 0xD2D2EC).at([-9, -2].add(level.SignNeonInn)).behind();
    level.WiggleVine.withStep(() => level.WiggleVine.angle = Math.round(Math.sin(now.s * Math.PI)) * 4);

    jungleTempleLever().at(level.TempleLever).show();

    advanceTempleMovingWall();
}

function jungleTempleLever() {
    const { templeLever } = progress.flags.jungle;
    const offAngle = -45;

    const getTargetAngle = () => templeLever.on ? -offAngle : offAngle;

    const t = subimageTextures(JungleLever, 3);
    const l = lever(t[2], t[1], getTargetAngle())
        .withStep(() => {
            l.angle = approachLinear(l.angle, getTargetAngle(), 5);
        })
        .withInteraction(() => {
            ActivateLever.play();
            templeLever.on = !templeLever.on;
        });
    const s = Sprite.from(t[0]);
    s.anchor.set(0.5, 1);
    l.addChildAt(s, 0);
    return l;
}