import createRegion from "../utils/factories/regionFactory";
import Region from "./Region";

const regions: Region[] = [
    createRegion("Region", {
        name: "Grasslands",
        tier: 1
    })
];

export const grassLands: Region = regions[0]

export default regions;