import Goblin from "../../entities/Goblin";
import Mob, { DropChance } from "../../entities/Mob";
import Place from "../../entities/Place";

type MobProperties = {
    name: string,
    description: string,
    location: Place[],
    drops:DropChance[]
};

const mobClasses: Record<string, new (...args: any) => Mob> = {
    Goblin
};

export default function createMob(mobtype: string, { name, description, location, drops }: MobProperties): Mob {
    const SpecificMob = mobClasses[mobtype];
    if (!SpecificMob) {
        throw new Error("This class doesn't exist.");
    }
    return new SpecificMob(name, description, location, drops);
} 