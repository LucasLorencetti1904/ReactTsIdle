import Place from "./Place.ts";
import { grassLands } from "./regions.ts";

const places: Place[] = [
    new Place("Waterfall Of So Many Things", "warm", grassLands)
];

export const waterFallOfSoManyThings: Place = places[0];

export default places;
