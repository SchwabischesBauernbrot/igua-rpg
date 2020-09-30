import {applyOgmoLevel} from "../igua/level/applyOgmoLevel";
import {DesertTownArgs} from "../levelArgs";
import {jukebox} from "../igua/jukebox";
import {Country, Oracle} from "../musics";
import {game} from "../igua/game";
import {Sprite} from "pixi.js";
import {CrateWooden} from "../textures";
import {isOnScreen} from "../igua/isOnScreen";
import { CratePickup, CratePlace } from "../sounds";
import {progress} from "../igua/progress";

function getDesertTownLevel()
{
    return applyOgmoLevel(DesertTownArgs);
}

type DesertTownLevel = ReturnType<typeof getDesertTownLevel>;

export function DesertTown()
{
    jukebox.play(Country).warm(Oracle);
    const level = getDesertTownLevel();
    game.backgroundColor = 0xF0F0B0;
    game.terrainColor = 0xE0D060;

    level.RightHouse.tint = 0xE08060;
    level.LeftHouse.tint = 0xA0C0C0;
    level.RightHouseDoor.locked = true;

    enhanceCrateStacker(level);
}

function enhanceCrateStacker(level: DesertTownLevel)
{
    const crates = [ level.Crate0, level.Crate1, level.Crate2, level.Crate3, level.Crate4, level.Crate5, level.Crate6, level.Crate7, level.Crate8, level.Crate9 ];
    let cratesLeftToStack = crates.length;

    let lastStackedCrate: Sprite | null;
    function stackCrate(playSound = true)
    {
        cratesLeftToStack--;
        if (cratesLeftToStack <= 0)
            progress.flags.stackedAllCrates = true;

        const nextCrate = Sprite.from(CrateWooden).at(
            lastStackedCrate
                ? { x: lastStackedCrate.x + Math.round(-6 + Math.random() * 12), y: lastStackedCrate.y - lastStackedCrate.height }
                : level.DropCrateAnchor);
        game.backgroundGameObjectStage.addChild(nextCrate);
        lastStackedCrate = nextCrate;
        if (playSound && isOnScreen(level.DropCrateAnchor))
            CratePlace.play();
    }

    function pickupCrate(playSound = true)
    {
        const crate = crates.shift();
        if (!crate)
            return false;

        if (playSound && isOnScreen(level.PickupCratesRegion))
            CratePickup.play();
        crate.destroy();
        return true;
    }

    if (progress.flags.stackedAllCrates)
    {
        while (pickupCrate(false))
            stackCrate(false);

        level.Stacker.at(896, 296);
        level.Stacker.duckUnit = 1;
        level.Stacker.isDucking = true;
    }

    let tiredOfWorking = progress.flags.stackedAllCrates;

    level.Stacker.cutscene = async p => {
        if (progress.flags.stackedAllCrates && !progress.flags.thankedByCrateStacker)
        {
            await p.show("Thank you for your help.");
            await p.show("All I have to show my appreciation is this old key.");
            await p.show("Received the key.");
            progress.flags.thankedByCrateStacker = true;
        }
        else if (tiredOfWorking)
            await p.show("I think I'm done working for today.");
        else
            await p.show("It's my job to take the crates and stack them.");
    };
    level.Stacker.engine.walkSpeed = 1;

    if (!tiredOfWorking)
    {
        level.Stacker.withAsync(async p => {
            await p.wait(() => isOnScreen(level.Stacker));
            while (crates.length > 2)
            {
                await level.Stacker.walkTo(crates[0].x);
                await p.sleep(500);
                if (!pickupCrate())
                    continue;

                await p.sleep(500);
                await level.Stacker.walkTo(level.DropCrateAnchor.x + 32);
                await p.sleep(500);
                stackCrate();
                await p.sleep(500);
            }

            await level.Stacker.walkTo(level.DropCrateAnchor.x + 96);
            level.Stacker.isDucking = true;
            tiredOfWorking = true;
        });
    }

    let playerHasCrate = false;

    level.PickupCratesRegion.withInteraction(() => {
        if (crates.length < 1)
            return;

        game.cutscenePlayer.playCutscene(async p => {
            if (playerHasCrate)
                await p.show("You are already carrying a crate.");
            else if (pickupCrate())
            {
                playerHasCrate = true;
                await p.show("Picked up a crate.");
            }
        });
    });

    level.DropCrateRegion.withInteraction(() => {
        if (!playerHasCrate)
            return;

        playerHasCrate = false;
        stackCrate();
        game.cutscenePlayer.playCutscene(async p => {
            await p.show("You placed the crate.");
        });
    });
}