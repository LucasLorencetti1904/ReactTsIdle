import Mob from "./Mob.ts";
import Goblin from "./Goblin.ts";

import {
    goblinSlipper
} from "./items.ts";

import {
    waterFallOfSoManyThings
} from "./places.ts";

import {
    grassLands
} from "./regions.ts";

const mobs: Mob[] = [
    new Goblin(
        "Weak Goblin",
        `The most common goblin, can be found
        in ${grassLands.name}.`,
        [
            waterFallOfSoManyThings    
        ],
        [
            {
                item: goblinSlipper,
                chance: 34
            }
        ]
    )
];

export const weakGoblin: Mob = mobs[0];

export default mobs;
