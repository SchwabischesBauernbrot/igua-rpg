import {Container} from "pixi.js";
import {game} from "../igua/game";
import {gotoLevel} from "../igua/level";
import {areRectanglesOverlapping} from "../utils/math";
import {EscapeTickerAndExecute} from "../utils/iguaTicker";
import {Gate} from "../sounds";
import {progress} from "../igua/progress";
import {GameObjectArgs} from "../../gen-levelargs/types/gameObjectArgs";

export function resolveGate(entity: GameObjectArgs)
{
    const anyEntity = entity as any;

    const destination = {
        levelName: anyEntity.levelName,
        checkpointName: anyEntity.checkpointName,
    };
    return game.gameObjectStage.addChild(gate(entity.x, entity.y, entity.width, entity.height, destination));
}

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
                    return gotoLevel(destination.levelName)
                });
        }
    });
}