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

    public constructor() {
        this.category = constructor.name;
    }
}
