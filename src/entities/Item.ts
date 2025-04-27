export type RarityTiers =
    | "common"
    | "incommon" 
    | "rare"
    | "epic"
    | "legendary"
    | "myth"
;

export default abstract class Item {
    public category: string;

    public constructor(
        public name: string,
        public rarity: RarityTiers,
        public description: string,
        public value: number
    ) {
        this.name = name;
        this.rarity = rarity;
        this.description = description;
        this.value = value;
        
        this.category = this.constructor.name;
    }
}