import { atom } from "jotai";

export const fetcher = url => fetch(url).then(res => res.json());
export const generateEmbed = id =>
  `https://player.twitch.tv?channel=${id}&parent=localhost:5173`;
export const selectedPlayerAtom = atom("");
