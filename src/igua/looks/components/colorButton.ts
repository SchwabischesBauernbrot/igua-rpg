import {button} from "./button";
import {PageElement} from "./page";
import {ColorInput, LooksInputModel} from "../looksModel";
import {rng} from "../../../utils/rng";
import {valueSlider} from "./valueSlider";
import {colord} from "colord";
import {toHexColorString} from "../../../utils/toHexColorString";

type Args = {
    input: ColorInput & { value };
    model: LooksInputModel;
    done();
}

function readHsv(input) {
    const hex = toHexColorString(input.value);
    const color = colord(hex);
    return color.toHsv();
}

export function makeColorPageElements({ model, input, done }: Args) {
    const el: PageElement[] = [];
    let {h, s, v} = readHsv(input);

    function writeColor() {
        const color = colord({ h, s, v, a: 1 });
        input.value = color.toPixi();
    }

    const hh = {
        get() {
            return h;
        },
        set(x) {
            h = x;
            writeColor();
        }
    }

    const ss = {
        get() {
            return s;
        },
        set(x) {
            s = x;
            writeColor();
        }
    }

    const vv = {
        get() {
            return v;
        },
        set(x) {
            v = x;
            writeColor();
        }
    }

    el.push(valueSlider('Hue', { min: 0, max: 359 }, hh, [5, 5, 7]));
    el.push(valueSlider('Saturation', { min: 0, max: 100 }, ss, [2, 2, 2]));
    el.push(valueSlider('Value', { min: 0, max: 100 }, vv, [2, 2, 2]));
    el.push(button('Random', () => input.value = rng.int(0xFFFFFF + 1)));
    el.push(button('Copy From...', () => {}));
    el.push(button('OK', done));

    const dy = 33;
    el[1].y = dy;
    el[2].y = dy * 2;
    el[3].y = dy * 3 + 15;
    el[4].y = dy * 4 + 15;
    el[5].y = dy * 5 + 30;

    return el;
}
