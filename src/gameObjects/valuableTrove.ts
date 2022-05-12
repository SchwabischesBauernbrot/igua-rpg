import {container} from "../utils/pixi/container";
import {sleep} from "../cutscene/sleep";
import {wait} from "../cutscene/wait";
import {persistence} from "../igua/data/persistence";
import {valuable} from "./valuable";

const trh = 15;
const tcw = 18;

export function valuableTrove(...rows: number[][]) {
    const c = container()
        .withAsync(async () => {
            let right = true;
            for (let y = 0; y < rows.length; y++) {
                const row = rows[y];
                const xoff = Math.floor((row.length * tcw) / 2);
                for (let x = right ? 0 : row.length - 1; (right && x < row.length) || (!right && x >= 0); x += right ? 1 : -1) {
                    numberToValuable(row[x]).at(x * tcw - xoff, trh * y).show(c).delayCollectible();
                    await sleep(67);
                }
                right = !right;
            }
        });

    let max = 0;
    for (const row of rows)
        max = Math.max(row.length, max);

    c.pivot.set((max * tcw) / -2 + tcw, (rows.length * trh) / 2 - trh);
    return c;
}

function numberToValuable(n: number) {
    return valuable(0, 0, undefined, n <= 5 ? 'ValuableOrange' : 'ValuableBlue');
}

export async function keepSavingValuables() {
    while (true) {
        await wait(() => valuable.instances.length > 0);
        await wait(() => valuable.instances.length === 0);
        await persistence.save();
    }
}

export function trove65() {
    return valuableTrove([15, 15],
        [5],
        [15, 15]);
}

export function trove100() {
    return valuableTrove(
        [5],
        [15, 15, 15],
        [15, 15, 15],
        [5]
    )
}