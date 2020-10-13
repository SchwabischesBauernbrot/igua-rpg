import {Container} from "pixi.js";
import {game} from "../igua/game";
import {EscapeTickerAndExecute} from "../utils/asshatTicker";
import {Gate} from "../sounds";
import {progress} from "../igua/data/progress";
import {resolveGameObject} from "../../tools/gen-levelargs/resolveGameObject";
import {level} from "../igua/level/level";
import {areRectanglesOverlapping} from "../utils/math/rectangle";
import {scene} from "../igua/scene";

export const resolveGate = resolveGameObject("Gate", args => {
    const anyEntity = args as any;

    const destination = {
        levelName: anyEntity.levelName,
        checkpointName: anyEntity.checkpointName,
    };
    return scene.gameObjectStage.addChild(gate(args.x, args.y, args.width, args.height, destination));
});

export function gate(x, y, width, height, destination: { checkpointName, levelName })
{
    const bounds = { x, y, width, height };

    const container = new Container();

    return container.withStep(() => {
        if (areRectanglesOverlapping(game.player.rectangle, bounds))
        {
            Gate.volume(0.4);
            Gate.play();
            throw new EscapeTickerAndExecute(
                () => {
                    progress.checkpointName = destination.checkpointName;
                    level.goto(destination.levelName)
                });
        }
    });
}