import createPlace from "../utils/factories/placeFactory";
import Place from "./Place";
import { grassLands } from "./regions";

const places: Place[] = [
    createPlace("Place", {
        name: "Waterfall Of So Many Things",
        temperature: "warm",
        region: grassLands
    })
];

export const waterFallOfSoManyThings: Place = places[0];

export default places;