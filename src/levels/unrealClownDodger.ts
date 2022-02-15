import {scene} from "../igua/scene";
import {applyOgmoLevel} from "../igua/level/applyOgmoLevel";
import {UnrealClownDodgerArgs} from "../levelArgs";
import {container} from "../utils/pixi/container";
import {commonClown} from "../gameObjects/commonClown";
import {BevelFilter} from "pixi-filters";
import {sleep} from "../cutscene/sleep";
import {AsshatTicker} from "../utils/asshatTicker";

export async function UnrealClownDodger() {
    scene.backgroundColor = 0x3E2F2F;
    scene.terrainColor = 0x912F24;
    const level = applyOgmoLevel(UnrealClownDodgerArgs);
    level.GroundSpeckles.tint = 0x3E2F2F;

    const ticker = new AsshatTicker();
    const c = container()
        .withTicker(ticker)
        .withAsync(async () => {
            while (true) {
                await sleep(2356 + 800);
                clown().at(scene.width - 96, 0);
            }
        });
    c.filters = [new BevelFilter({ thickness: 1, rotation: 45, lightColor: 0x28C9B3, shadowColor: 0x0E7F70, lightAlpha: 1, shadowAlpha: 1 })];

    function clown() {
        const clown = c.addChild(commonClown({ hspeed: -.75, limitedRangeEnabled: false, portal: true, dangerous: false }))
            .withStep(() => {
                if (clown.y >= 256)
                    clown.destroy();
            });
        return clown;
    }

    scene.ext.simulated = true;
    scene.gameObjectStage.addChild(c);
    for (let i = 0; i < 1600; i++) {
        ticker.update();
        await Promise.resolve();
    }
    scene.ext.simulated = false;

    scene.gameObjectStage
        .withStep(() => ticker.update());
}