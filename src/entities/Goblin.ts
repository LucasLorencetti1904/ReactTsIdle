import Mob, {
    RaceTypes,
    DropChance
} from "Mob.ts";

import Place from "Place.ts";

export default class Goblin extends Mob {
    public constructor(
        name: string,
        race: RaceTypes,
        location: Place[],
        drops: DropChance[]
    ) {
        super();
        this.name = name;
        this.race = race;
        this.location = location;
        this.drops = drops;
        this.init();
    }

    get baseLevel(): number {
        return 1;
    }
}

