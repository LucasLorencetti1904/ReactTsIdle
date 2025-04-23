import Place from "Place.ts";
import Item from "Item.ts";

export type RaceTypes = "goblin";
export type DropChance = {
    item: Item;
    chance: number;
};

export function randLevel(max) {
    return Math.floor(Math.random() * (max + 1))
}

export default abstract class Mob {
    public name!: string;
    public level!: number;
    public health!: number;
    public damage!: number;
    public race!: RaceTypes;
    public location!: Place[];
    public drops!: DropChance[];

    protected init() {
        this.baseLevel + randLevel(10)
        this.health = this.level * 50;
        this.damage = this.level * 20;
    }

    abstract get baseLevel(): number
}

