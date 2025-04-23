import Item from "Item.ts"

export default class Material extends Item {
    public constructor(
        name: string,
        rarity: RarityTiers,
        description: string,
        value: number,
        category: ItemCategories
    ) {
        super();
        this.name = name;
        this.rarity: rarity;
        this.description: description;
        this.value: value;
    }
}
