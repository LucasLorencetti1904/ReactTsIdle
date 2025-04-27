import Item from "./Item";
import createItem from "../utils/factories/itemFactory";

const items: Item[] = [
    createItem("Material", {
        name: "Goblin Slipper",
        rarity: "common",
        description: "Don't ask me what it's.",
        value: 10
    })
];

export const goblinSlipper: Item = items[0];

export default items;