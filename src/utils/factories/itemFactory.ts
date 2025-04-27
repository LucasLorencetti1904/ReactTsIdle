import Item, { RarityTiers } from "../../entities/Item";
import Material from "../../entities/Material";

type ItemProperties = {
    name: string,
    rarity: RarityTiers,
    description: string,
    value: number
};

const itemClasses: Record<string, new (...args: any) => Item> = {
    Material
};

export default function createItem(itemType: string, { name, rarity, description, value }: ItemProperties): Item {
    const SpecificItem = itemClasses[itemType];
    if (!SpecificItem) {
        throw new Error("This class doesn't exist.");
    }
    return new SpecificItem(name, rarity, description, value);
}