type RarityTiers =
    | "common"
    | "incommon" 
    | "rare"
    | "epic"
    | "legendary"
    | "myth"
;

export default abstract class Item {
    public name!: string;
    public rarity!: RarityTiers;
    public description!: string;
    public value!: number;
    public category: string;

    public constructor(
        name: string,
        rarity: RarityTiers,
        description: string,
        value: number,
        category: string

    ) {
        this.name = name;
        this.rarity = rarity;
        this.description = description;
        this.value = value;
        this.category = constructor.name;
    }
}
