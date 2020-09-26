import {loadTexturesAsync} from "./textures";
import {loadFontsAsync} from "./fonts";
import {loadHowlsAsync} from "./utils/loadHowls";
import * as PIXI from "pixi.js";
import {handlePromiseCancellation} from "pissant";
import {discoverGameObjectResolvers} from "../tools/gen-levelargs/discoverGameObjectResolvers";
import {
    publishGameObjectResolvers,
    publishGameObjectResolversIsRequested
} from "../tools/write-levelargs/appOnly/publishGameObjectResolvers";
import {environment} from "./igua/environment";
import {createApplication} from "./utils/createApplication";
import {upscaleGameCanvas} from "./igua/upscaleGameCanvas";
import {devMute} from "./igua/devMute";

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
const application = createApplication({width: 256, height: 256, targetFps: 60, showCursor: false});

async function initialize()
{
    addGameCanvasToDocument(application.canvasElement);
    upscaleGameCanvas(application.canvasElement);

    if (!environment.isProduction)
        devMute();

    const howls = Object.values(require("./sounds")) as Howl[];
    await Promise.all([loadFontsAsync(), loadTexturesAsync(), loadHowlsAsync(howls)]);
    require("./utils/arrayExtensions");
    require("./utils/pixiExtensions");
    if (publishGameObjectResolversIsRequested())
        discoverAndPublishGameObjectResolvers();
    else
        require("./igua/game").startGame(application);
}

if (environment.isProduction)
    document.body.appendChild(createStartGameButtonElement());
else
    window.onload = initialize;

window.onunhandledrejection = handlePromiseCancellation;

function discoverAndPublishGameObjectResolvers()
{
    publishGameObjectResolvers(discoverGameObjectResolvers([{
        modules: require("./gameObjects/**/*.*"),
        path: "src/gameObjects"
    }]));
}

function createStartGameButtonElement()
{
    const buttonElement = document.createElement("button");
    buttonElement.id = "startButton";
    buttonElement.textContent = "Start game";
    buttonElement.onclick = () => {
        document.body.removeChild(buttonElement);
        setTimeout(initialize);
    };
    return buttonElement;
}

function addGameCanvasToDocument(element: HTMLElement)
{
    element.id = "gameCanvas";
    document.body.appendChild(element);
}