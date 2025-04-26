import Place from "./Place.ts";
import Item from "./Item.ts";

export type DropChance = {
    item: Item;
    chance: number;
};

export function randLevel(max): number {
    return Math.floor(Math.random() * (max + 1))
}

export default abstract class Mob {
    public name: string;
    public description: string;
    public race: string;
    public location: Place[];
    public drops: DropChance[];
    
    public level: number;
    public health: number;
    public damage: number;

    public constructor(
        name: string,
        description: string,
        location: Place[],
        drops: DropChance[]
    ) {
        this.name = name;
        this.description = description;
        this.race = this.constructor.name;
        this.location = location;
        this.drops = drops;
        
        this.level = this.calcLevel();
        this.health = this.calcHealth();
        this.damage = this.calcDamage();
    }

    protected abstract get baseLevel(): number;
    
    private calcLevel(): number {
        return this.level = this.baseLevel + randLevel(10);
    }
    
    private calcHealth(): number {
        return this.health = this.level * 50;
    }

    private calcDamage(): number {
        return this.damage = this.level * 20;
    }
}
