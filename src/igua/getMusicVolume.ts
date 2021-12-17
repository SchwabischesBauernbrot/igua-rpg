import * as music from "../musics";

type Title = keyof typeof music;

const volumes: Partial<Record<Title, number>> = {
    Shop: 0.8,
}

export function getMusicVolume(howl: Howl) {
    const [title] = Object.entries(music).find(([_, value]) => value === howl) || ['__undefined__'];
    return volumes[title] ?? 1;
}