import {Graphics, Sprite} from "pixi.js";
import {merge} from "../../../utils/merge";
import {IguaText} from "../../text";
import {subimageTextures} from "../../../utils/pixi/simpleSpritesheet";
import {Key} from "../../../utils/browser/key";
import {UiChooseYourLooksIcons} from "../../../textures";

const [
    headIcon,
    bodyIcon,
    feetIcon,
    checkIcon,
    backIcon,
    floppyIcon,
    crestIcon,
    eyesIcon,
    mouthIcon,
    hornIcon,
    pupilsIcon,
    torsoIcon,
    tailIcon,
    clubIcon,
    frontIcon,
    hindIcon,
    nailsIcon,
    lightBulbIcon] = subimageTextures(UiChooseYourLooksIcons, { width: 30 });

const icons = {
    'head': headIcon,
    'body': bodyIcon,
    'feet': feetIcon,
    'done': floppyIcon,
    'back': backIcon,
    'crest': crestIcon,
    'eyes': eyesIcon,
    'mouth': mouthIcon,
    'horn': hornIcon,
    'pupils': pupilsIcon,
    'torso': torsoIcon,
    'tail': tailIcon,
    'club': clubIcon,
    'front': frontIcon,
    'hind': hindIcon,
    'claws': nailsIcon,
    'ok': checkIcon,
    'inspiration': lightBulbIcon,
}

function getIcon(text: string) {
    return icons[text.toLowerCase()];
}

export function button(text: string, onPress: () => unknown, width = 96, height = 30) {
    function center() {
        // @ts-ignore
        font.anchor.x = 0.5;
        font.x = width / 2;
        return g;
    }

    let jigglesOnPress = false;

    function jiggle() {
        jigglesOnPress = true;
        return g;
    }

    let factor = 0;

    const g = merge(new Graphics(), { selected: false, center, jiggle }).withStep(() => {
        g.clear().beginFill(0x005870);
        if (g.selected)
            g.lineStyle(2, 0x00FF00, 1, 0);
        g.drawRect(0, 0, width, height);

        if (factor > 0) {
            g.pivot.x = (factor % 2 === 0 ? 1 : -1) * Math.ceil(factor / 6);
            factor--;
        }
        else
            g.pivot.x = 0;

        if (g.selected && Key.justWentDown('Space')) {
            onPress();
            if (jigglesOnPress)
                factor = 8;
        }
    });
    const icon = getIcon(text);
    if (icon)
        g.addChild(Sprite.from(icon));
    const font = IguaText.Large(text).at(32, (height - 14) / 2);
    // if (text.length > 11 && !text.includes('...')) {
    //     font.text = text.replace(' ', '\n');
    //     font.align = 'center';
    //     // @ts-ignore
    //     font.anchor.set(0.5, 0.5);
    //     font.x += (width - font.x) / 2.5;
    //     font.y = height / 2 - 1;
    // }
    g.addChild(font);
    return g;
}