import Place from "./Place";
import Item from "./Item";

export type DropChance = {
    item: Item;
    chance: number;
};

export function randLevel(max: number): number {
    return Math.floor(Math.random() * (max + 1))
}

export default abstract class Mob {
    public race: string;
    
    public level: number;
    public health: number;
    public damage: number;

    public constructor(
        public name: string,
        public description: string,
        public location: Place[],
        public drops: DropChance[]
    ) {
        this.name = name;
        this.description = description;
        this.location = location;
        this.drops = drops;
        
        this.race = this.constructor.name;

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