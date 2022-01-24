import {iguanaPuppet} from "../igua/puppet/iguanaPuppet";
import {Container, DisplayObject, Sprite} from "pixi.js";
import {
    CharacterHead,
    CharacterMouthV,
    CharacterPupils, CharacterWhites,
    NpcBlueFoot,
    NpcBlueFootRear,
    NpcCurvedCrest, NpcCurvedCrest2,
    NpcGreenPolkaBody, NpcPupilsAngry,
    NpcRedFoot,
    NpcRedFootRear,
    NpcWeirdBody,
    NpcStrangeBody,
    NpcPinkFoot,
    NpcPinkFootRear,
    NpcPupilsCartoonish,
    NpcShortTailBody,
    NpcYellowFoot,
    NpcYellowFootRear,
    NpcPupilsWeird,
    NpcLongTailBody, NpcBlueFoot2, NpcBlueFootRear2, NpcHornedCrest, CharacterCrest, CharacterBody, NpcPupilsCartoonishGapped
} from "../textures";
import {IguanaEyes, iguanaEyes} from "../igua/puppet/eyes";
import {Vector} from "../utils/math/vector";
import {makePseudo} from "../utils/makePseudo";
import { filters } from "pixi.js";
import {Looks} from "../igua/looks/looksModel";
import {makeIguanaPuppetArgsFromLooks} from "../igua/looks/makeIguanaPuppetArgsFromLooks";
import {DesertCostumerLooks} from "./npcLooks";

export type NpcStyle = ReturnType<typeof npcStyle>;
const npcStyles: NpcStyle[] = [];

npcStyles[0] = npcStyle(args => {
    args.body = Sprite.from(NpcWeirdBody);
    args.body.pivot.y += 4;
    args.body.tint = 0xFF8A7C;

    args.frontRightFoot = Sprite.from(NpcRedFoot);

    args.backRightFoot = Sprite.from(NpcRedFootRear);
    args.backRightFoot.pivot.y = 1;

    args.crest = Sprite.from(NpcCurvedCrest);
    args.crest.pivot.set(-2, 2);
    args.crest.tint = 0x75CAFF;

    args.headSprite.tint = 0x73C88C;
    args.mouthSprite.tint = 0xA83F2F;

    args.pupils.tint = 0xA83F2F;
    args.eyelidColor = 0x5AA86E;
});

npcStyles[1] = npcStyle(args => {
    args.body = Sprite.from(NpcGreenPolkaBody);
    args.body.tint = 0xD8D44E;
    args.body.pivot.y += 3;

    args.frontRightFoot = Sprite.from(NpcBlueFoot);
    args.frontRightFoot.pivot.y = 2;

    args.backRightFoot = Sprite.from(NpcBlueFootRear);
    args.backRightFoot.pivot.y = 2;

    args.crest = Sprite.from(NpcCurvedCrest2);
    args.crest.pivot.set(-2, 2);
    args.crest.tint = 0x198A96;

    args.headSprite.tint = 0xFF8E7F;
    args.mouthSprite.tint = 0x2A87A9;

    args.pupils = Sprite.from(NpcPupilsAngry);
    args.pupils.pivot.y -= 1;
    args.pupils.tint = 0x2A87A9;
    args.eyelidColor = 0xA9272C;
});

npcStyles[2] = npcStyle(args => {
    args.body = Sprite.from(NpcStrangeBody);

    args.frontRightFoot = Sprite.from(NpcPinkFoot);

    args.backRightFoot = Sprite.from(NpcPinkFootRear);
    args.backRightFoot.pivot.y = 1;

    args.crest = Sprite.from(NpcCurvedCrest2);
    args.crest.scale.x *= -1;
    args.crest.pivot.set(8, 4);
    args.crest.tint = 0x6060A0;

    args.headSprite.tint = 0xF0E050;
    args.mouthSprite.tint = 0xE04040;

    args.pupils = Sprite.from(NpcPupilsCartoonish);
    args.pupils.pivot.y -= 1;
    args.pupils.tint = 0xE04040;
    args.eyelidColor = 0xF0E050;
});

npcStyles[3] = npcStyle(args => {
    args.body = Sprite.from(NpcShortTailBody);
    args.body.pivot.y -= 1;
    args.body.tint = 0x80D080;

    args.frontRightFoot = Sprite.from(NpcYellowFoot);

    args.backRightFoot = Sprite.from(NpcYellowFootRear);
    args.backRightFoot.pivot.y = 1;

    args.crest = Sprite.from(NpcCurvedCrest);
    args.crest.scale.y *= -1;
    args.crest.pivot.set(-3, -4);
    args.crest.tint = 0x4080F0;

    args.headOffset.y += 2;

    args.headSprite.tint = 0xF0D080;
    args.mouthSprite.tint = 0x4080F0;

    args.pupils = Sprite.from(NpcPupilsWeird);
    args.pupils.pivot.y -= 1;
    args.pupils.tint = 0x4080F0;
    args.eyelidColor = 0xC0B070;
});

npcStyles[4] = npcStyle(args => {
    args.body = Sprite.from(NpcLongTailBody);
    args.body.pivot.x += 13;
    args.body.pivot.y += 3;
    args.body.tint = 0xA0A0E0;

    args.frontRightFoot = Sprite.from(NpcBlueFoot2);

    args.backRightFoot = Sprite.from(NpcBlueFootRear2);
    args.backRightFoot.pivot.y = 1;

    args.crest = Sprite.from(NpcHornedCrest);
    args.crest.pivot.set(-6, 6);
    args.crest.tint = 0xD05070;

    args.headOffset.y += 2;

    args.headSprite.tint = 0x90D0E0;
    args.mouthSprite.tint = 0xD05070;

    args.moveCrestWhenDucking = false;

    args.pupils = Sprite.from(NpcPupilsCartoonish);
    // args.pupils.pivot.y += 1;
    args.pupils.tint = 0xD05070;
    args.eyelidColor = 0x60B0D0;
});

npcStyles[5] = genNpcStyle1(172, (args) => {
    args.pupils.pivot.y -= 1;
});
npcStyles[6] = genNpcStyle1(191, (args) => {
    args.pupils.texture = NpcPupilsCartoonishGapped;
    args.pupils.pivot.x -= 2;
});

npcStyles[7] = fromLooks(DesertCostumerLooks);

function fromLooks(looks: Looks) {
    return () => iguanaPuppet(makeIguanaPuppetArgsFromLooks(looks))
}

function genNpcStyle1(seed: number, configure?: (args: ConfigureNpcStyleArgs) => void) {
    return () => {
        const pseudo = makePseudo(seed);
        const npcContainer = npcStyle(args => {
            args.body = Sprite.from(pseudo.choose(NpcLongTailBody, NpcShortTailBody, NpcStrangeBody, NpcGreenPolkaBody, NpcWeirdBody, CharacterBody));
            args.body.pivot.x += -2 + pseudo.int() % 4;
            args.body.pivot.y += -2 + pseudo.int() % 6 + 3;
            args.body.tint = pseudo.color();

            args.frontRightFoot = Sprite.from(pseudo.choose(NpcBlueFoot2, NpcYellowFoot, NpcBlueFoot, NpcPinkFoot, NpcRedFoot));

            args.backRightFoot = Sprite.from(pseudo.choose(NpcBlueFootRear2, NpcBlueFootRear, NpcPinkFootRear, NpcYellowFootRear, NpcRedFootRear));
            args.backRightFoot.pivot.y = 1 + pseudo.int() % 2;

            args.crest = Sprite.from(pseudo.choose(NpcCurvedCrest, NpcCurvedCrest2, NpcHornedCrest, CharacterCrest));
            args.crest.pivot.set(-6 + pseudo.int() % 8, 6 - pseudo.int() % 8);
            if (pseudo.bool())
                args.crest.scale.y *= -1;
            args.crest.tint = pseudo.color();

            args.headOffset.y += pseudo.int() % 2;

            args.headSprite.tint = pseudo.color();
            args.mouthSprite.tint = pseudo.color();

            args.pupils = Sprite.from(pseudo.choose(NpcPupilsCartoonish, NpcPupilsWeird));
            args.pupils.tint = pseudo.color();
            args.eyelidColor = pseudo.color();

            if (configure)
                configure(args);
        })();
        const colorMatrixFilter = new filters.ColorMatrixFilter();
        colorMatrixFilter.hue(pseudo.int() % 360, false);
        npcContainer.filters = [colorMatrixFilter];
        return npcContainer;
    }
}

function npcStyle(configure: (args: ConfigureNpcStyleArgs) => void)
{
    return () => {

        const pupils = Sprite.from(CharacterPupils);
        pupils.pivot.set(-2, -3);

        const mouthSprite = Sprite.from(CharacterMouthV);
        mouthSprite.pivot.set(-10, -11);

        const args = {headSprite: Sprite.from(CharacterHead), mouthSprite, pupils, eyeShape: Sprite.from(CharacterWhites), headOffset: { x: 0, y: 0 } } as unknown as ConfigureNpcStyleArgs;
        configure(args);

        if (!args.frontLeftFoot)
        {
            args.frontLeftFoot = Sprite.from(args.frontRightFoot.texture);
            args.frontLeftFoot.tint = 0xC7D7D7;
            args.frontLeftFoot.pivot.copyFrom(args.frontRightFoot.pivot);
        }

        if (!args.backLeftFoot)
        {
            args.backLeftFoot = Sprite.from(args.backRightFoot.texture);
            args.backLeftFoot.tint = 0xC7D7D7;
            args.backLeftFoot.pivot.copyFrom(args.backRightFoot.pivot);
        }

        if (!args.head)
        {
            const container = new Container();
            args.head = container;
            container.addChild(args.headSprite, args.mouthSprite);
        }

        args.head.pivot.add(args.headOffset);

        if (!args.eyes)
            args.eyes = iguanaEyes(args as any);

        args.eyes.pivot.add(args.headOffset);

        return iguanaPuppet(args as any);
    }
}

interface ConfigureNpcStyleArgs
{
    body: Sprite;
    backLeftFoot?: Sprite;
    backRightFoot: Sprite;
    frontLeftFoot?: Sprite;
    frontRightFoot: Sprite;
    head?: DisplayObject;
    headSprite: Sprite;
    mouthSprite: Sprite;
    crest: Sprite;
    eyes?: IguanaEyes;
    pupils: Sprite;
    eyeShape: Container;
    eyelidColor?: number;
    headOffset: Vector;
    moveCrestWhenDucking?: boolean;
}

export function getNpcStyle(index: number)
{
    if (!(index in npcStyles)) {
        console.error("npc style index", index, "is out of bounds", [0, npcStyles.length])
        index = 0;
    }
    return npcStyles[index];
}
