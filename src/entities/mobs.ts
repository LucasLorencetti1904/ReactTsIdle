import Mob from "Mob.ts";
import Goblin from "Goblin.ts";

import {
    goblinSlipper
} from items.ts;

const mobs: Mob[] = [
    new Goblin(
        "Weak Goblin", "goblin", [
            waterFallOfSoManyThings    
        ], [
            {
                item: goblinSlipper,
                chance: 34
            }
        ]
    )
];

export const weakGoblin: Mob = mobs[0];

export default mobs;
