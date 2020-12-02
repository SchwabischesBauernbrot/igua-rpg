import {applyOgmoLevel} from "../igua/level/applyOgmoLevel";
import {DesertOutskirtsArgs} from "../levelArgs";
import {scene, sceneStack} from "../igua/scene";
import {progress} from "../igua/data/progress";
import {DesertField} from "./desertField";
import {flash} from "../gameObjects/flash";
import {lever} from "../gameObjects/lever";
import {subimageTextures} from "../utils/pixi/simpleSpritesheet";
import {DesertTempleLever} from "../textures";
import {add} from "../utils/math/vector";
import {cutscene} from "../cutscene/cutscene";
import {ActivateLever, TempleDoorOpen, TransitionSlide} from "../sounds";
import {ShockwaveFilter} from "@pixi/filter-shockwave";
import {game} from "../igua/game";

function getDesertOutskirtsLevel()
{
    return applyOgmoLevel(DesertOutskirtsArgs);
}

type DesertOutskirtsLevel = ReturnType<typeof getDesertOutskirtsLevel>;

export function DesertOutskirts()
{
    const level = getDesertOutskirtsLevel();
    scene.backgroundColor = 0xF0F0B0;
    scene.terrainColor = 0xE0D060;

    enrichUnlockTemple(level);
}

function enrichUnlockTemple(level: DesertOutskirtsLevel)
{
    const offAngle = -45;
    const onAngle = -offAngle;

    const leverTextures = subimageTextures(DesertTempleLever, 2);
    const leverObject = lever(leverTextures[0], leverTextures[1], progress.flags.desert.unlockedTemple? onAngle : offAngle)
        .at(add({ x: 0, y: 8 }, level.TempleUnlockBlob));
    scene.backgroundGameObjectStage.addChild(leverObject);

    level.TempleUnlockBlob.visible = false;
    leverObject.withInteraction(() => {
        if (progress.flags.desert.unlockedTemple)
        {
            cutscene.play(async p => {
               await p.show("You already activated the lever. It opened the door to the desert temple.");
            });
            return;
        }

        cutscene.play(async p => {
            ActivateLever.play();
            await p.lerp(leverObject, "angle").to(onAngle).over(200);

            const flashObject = flash(0xF0F0B0, 0);
            TransitionSlide.volume(0.7);
            TransitionSlide.play();
            await p.lerp(flashObject, "alpha").to(1).over(500);

            sceneStack.push();
            const level = DesertField();
            scene.camera.x = 1296;
            const goalX = Math.round(level.TempleDoor.x - 128 + 15);
            const goalY = Math.round(level.TempleDoor.y - 128);
            scene.camera.y = goalY + 32;

            await p.lerp(flashObject, "alpha").to(0).over(500);
            flashObject.destroy();

            await p.move(scene.camera).to(goalX, goalY).over(4_000);
            await p.sleep(500);

            const shockwaveFilter = new ShockwaveFilter([128, 136]);
            game.sceneStage.filters = [shockwaveFilter];
            level.TempleDoor.locked = false;
            TempleDoorOpen.play();
            await p.lerp(shockwaveFilter, "time").to(1).over(1000);
            await p.sleep(500);
            game.sceneStage.filters = [];
            sceneStack.pop();
            progress.flags.desert.unlockedTemple = true;
        })
    });
}