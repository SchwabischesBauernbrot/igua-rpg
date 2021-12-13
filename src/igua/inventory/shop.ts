import {getCost, potions, PotionType} from "./potions";
import {BitmapText, Container, Graphics, Sprite} from "pixi.js";
import {game} from "../game";
import {merge} from "../../utils/merge";
import {AcrobatixFont} from "../../fonts";
import {ValuableIcon} from "../../textures";
import {iguanaHead} from "../puppet/iguanaPuppet";
import {playerPuppetArgs} from "../../gameObjects/player";
import {Key} from "../../utils/browser/key";
import {SelectOption} from "../../sounds";
import {cyclic} from "../../utils/math/number";

export function shop(...potions: PotionType[]) {
    return new Promise<void>(r => {
        shopImpl(r, potions);
    });
}

function option() {
    const graphics = new Graphics()
        .lineStyle(3, 0x00FF00, 1, 0)
        .beginFill(0x005870)
        .drawRect(0, 0, 134, 26)
    graphics.visible = false;
    graphics.x = (256 - graphics.width);
    return graphics;
}

function potionContent(type?: PotionType) {
    const container = merge(new Container(), { put(c?: Container) {
            container.visible = !!c;
            if (!c)
                return;
            container.at(c).add(3, (c.height - 20) / 2);
        } });

    if (type) {
        const potion = potions[type];
        const potionSprite = Sprite.from(potion.texture);
        const name = new BitmapText(potion.name, { fontName: AcrobatixFont.font }).at(23, -2);
        const valuableIcon = Sprite.from(ValuableIcon).at(23, 12);
        const price = new BitmapText('', { fontName: AcrobatixFont.font }).at(34, 9).withStep(() => price.text = getCost(type).toString());
        container.addChild(potionSprite, name, valuableIcon, price);
    }
    else {
        const done = new BitmapText('Done', { fontName: AcrobatixFont.font }).at(77, -1);
        container.addChild(done);
    }

    container.visible = false;
    return container;
}

type PotionContent = ReturnType<typeof potionContent>;

function shopImpl(resolve: () => void, types: PotionType[]) {
    const c = new Container();
    game.hudStage.addChild(c);
    const options: Container[] = [];
    let y = 1;

    const optionsLength = types.length + 1;
    for (let i = 0; i < optionsLength; i++) {
        const o = option();
        options.push(o);
        o.y = y;
        y += o.height + 2;
        c.addChild(o);
    }

    const rect1 = [options[0].x, 0, 256, options[options.length - 2].y + options[options.length - 2].height + 3];
    const rect2 = [193, 0, 256, options[options.length - 1].y + options[options.length - 1].height - 4];
    const rects = [rect1, rect2];

    const graphics = new Graphics();
    graphics.beginFill(0x00FF00);
    for (let i = 0 ; i < 2; i++) {
        const j = i * 3;
        for (const rect of rects) {
            graphics.drawRect(rect[0] + j, rect[1] + j, rect[2] - rect[0] - j * 2, rect[3] - rect[1] - j * 2);
        }
        graphics.beginFill(0x005870);
    }

    c.addChild(graphics);

    const potionContents: PotionContent[] = [];
    for (const type of types)
        potionContents.push(potionContent(type));
    potionContents.push(potionContent());
    c.addChild(...potionContents);

    let selectedIndex = -1;

    const tip = new Container();
    const tipGfx = new Graphics()
        .lineStyle(3, 0x00FF00, 1, 0)
        .beginFill(0x005870)
        .drawRect(0, 0, 122, 54);
    const tipText = new BitmapText('', { fontName: AcrobatixFont.font, maxWidth: tipGfx.width - 10 }).at(5, 2);
    tip.addChild(tipGfx, tipText);
    tip.withStep(() => {
       const type = types[selectedIndex];
       tip.visible = !!type;
       if (!tip.visible)
           return;
       tipText.text = potions[type].description;
    });
    tip.y = Math.max(64, Math.min(192, rect1[3] - rect1[1] - tipGfx.height));

    c.addChild(tip);

    const cursor = iguanaHead(playerPuppetArgs()).withStep(() => {
        const nothingSelected = selectedIndex === -1;
        const previousSelectedIndex = selectedIndex;

        if (Key.justWentDown("ArrowUp"))
        {
            if (nothingSelected)
                selectedIndex = potionContents.length - 1;
            else
                selectedIndex--;
        }
        else if (Key.justWentDown("ArrowDown"))
        {
            if (nothingSelected)
                selectedIndex = 0;
            else
                selectedIndex++;
        }

        if (!nothingSelected) {
            selectedIndex = cyclic(selectedIndex, 0, potionContents.length);
        }

        if (selectedIndex !== -1) {
            const option = options[selectedIndex];
            cursor.at(option).add(option.width - 8, 10);
            const doneSelected = selectedIndex === options.length - 1;
            if (doneSelected)
                cursor.y -= 8;

            if (Key.justWentDown('Space')) {
                if (doneSelected) {
                    resolve();
                    c.destroy();
                    return;
                }
            }
        }

        if (previousSelectedIndex !== selectedIndex)
            SelectOption.play();

        potionContents.forEach(x => x.put(undefined));
        for (let i = 0; i < options.length; i++)
            potionContents[i].put(options[i]);
        cursor.visible = selectedIndex !== -1;
    });

    cursor.scale.x = -1;

    c.addChild(cursor);
}