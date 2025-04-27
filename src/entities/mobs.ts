import createMob from "../utils/factories/mobFactory";
import Mob from "./Mob";

import {
    goblinSlipper
} from "./items";

import {
    waterFallOfSoManyThings
} from "./places";

import {
    grassLands
} from "./regions";

const mobs: Mob[] = [
    createMob( "Goblin", {
        name: "Weak Goblin",
        description: `The most common goblin, can be found in ${grassLands.name}.`,
        location: [
            waterFallOfSoManyThings
        ],
        drops: [
            {
                item: goblinSlipper,
                chance: 34
            }
        ]
    })
];

export const weakGoblin: Mob = mobs[0];

export default mobs;