import {DisplayObject, Graphics, Sprite} from "pixi.js";
import {Cobweb, Spider} from "../textures";
import {container} from "../utils/pixi/container";
import {now} from "../utils/now";
import {rectangleDistance} from "../utils/math/rectangleDistance";
import {player} from "./player";

export function spider(target: DisplayObject, yOffset: number, { activate = 48, baseUnit = 0.5, downUnit = 0.01, upUnit = 0.03 } = {}) {
    const w = Sprite.from(Cobweb).at([0, yOffset].add(target)).centerAnchor();
    let unit = 0.5;
    const g = new Graphics().withStep(() => {
        g.clear().lineStyle(1, 0xffffff).moveTo(w.x, w.y - 5).lineTo(s.x, s.y);
    }).at(1, 0);
    let behaviorIndex = 0;
    let offset = [].vcpy();
    const s = Sprite.from(Spider).at(w).withStep(() => {
        s.y = w.y + Math.round(unit * -yOffset);

        if (target.destroyed) {
            unit += Math.sin(now.s * Math.PI * 4) * 0.002;
            return;
        }

        if (behaviorIndex === 0) {
            unit = baseUnit + Math.sin(now.s * Math.PI * 4) * 0.025 * Math.abs(Math.sin(now.s * Math.PI * 1.3 - 4));
            if (rectangleDistance(player, target) < activate && Math.abs(player.hspeed) > 2)
                behaviorIndex = 1;
        }
        if (behaviorIndex === 1 || target.destroyed) {
            unit += downUnit;
        }
        if (behaviorIndex < 2 && target.collides(s)) {
            behaviorIndex = 2;
            offset.at(target).add(s, -1);
        }
        if (behaviorIndex === 2) {
            target.at(s).add(offset);
            unit -= upUnit;
            if (unit <= 0) {
                unit = 0;
                behaviorIndex = 3;
            }
        }
    });
    s.anchor.set(4/12, 2/6);
    return container(w, g, s);
}