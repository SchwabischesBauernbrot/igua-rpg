import {scene} from "../igua/scene";
import {jukebox} from "../igua/jukebox";
import {CapitalMusicPlease, Temple} from "../musics";
import {applyOgmoLevel} from "../igua/level/applyOgmoLevel";
import { CapitalOutskirtsArgs } from "../levelArgs";
import {manyCapitalBricks} from "../gameObjects/capitalBricks";
import {makePseudo} from "../utils/math/makePseudo";
import {makeCapitalWindow} from "./capitalShop";
import {impossiblePuzzle} from "../gameObjects/impossiblePuzzle";
import {progress} from "../igua/data/progress";
import {Sprite} from "pixi.js";
import {CapitalBrickWall} from "../textures";
import {GameObjectsType} from "../igua/level/applyOgmoLevelArgs";
import {getWorldBounds} from "../igua/gameplay/getCenter";
import {automaticDoorWithSfx} from "../gameObjects/automaticDoorWithSfx";
import {region} from "../gameObjects/region";
import {terrainGradient} from "../gameObjects/outerGradient";

export function CapitalOutskirts() {
    scene.pipeStage.style = 2;
    scene.backgroundColor = 0xF0C8D0;
    scene.terrainColor = 0xF0B020;
    jukebox.play(CapitalMusicPlease).warm(Temple);
    const level = applyOgmoLevel(CapitalOutskirtsArgs);

    manyCapitalBricks(
        scene.terrainStage.children.filter(x => x.ext.isBlock),
        makePseudo(287459.32798))
        .show(scene.terrainStage);

    [level.Window1, level.Window2].forEach(x => makeCapitalWindow(x, 0xE87880));
    impossiblePuzzle(progress.flags.capital, 'solvedImpossiblePuzzle').at(level.Puzzle).show();
    enrichBlockadeWall(level);
    enrichTransition(level);
}

function enrichBlockadeWall(level: GameObjectsType<typeof CapitalOutskirtsArgs>) {
    level.BlockadeWall.hide();
    const bricks = Sprite.from(CapitalBrickWall).withStep(() => bricks.at(getWorldBounds(level.BlockadeWall))).behind();
    automaticDoorWithSfx(level.BlockadeWall, false, () => progress.flags.capital.solvedImpossiblePuzzle);
}

function enrichTransition(level: GameObjectsType<typeof CapitalOutskirtsArgs>) {
    const transitions = region.instances.filter(x => x.x < 128);
    const colors = [0x4868A0, 0x808078, 0xA09060, 0xC09848].reverse();
    terrainGradient(transitions, colors);
    level.CapitalVolcanoBackdrop.tinted(0x182840);
}