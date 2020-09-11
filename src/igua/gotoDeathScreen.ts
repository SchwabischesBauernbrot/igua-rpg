import {level} from "./level/level";
import {game, loadSavedProgress, recreatePlayer} from "./game";
import {progress} from "./progress";

export function gotoDeathScreen()
{
    level.clear();
    game.player.isDead = true;
    game.backgroundColor = 0x000000;
    setTimeout(() => {
        recreatePlayer();
        loadSavedProgress();
        level.gotoSync(progress.levelName);
    },
    4_000)
}