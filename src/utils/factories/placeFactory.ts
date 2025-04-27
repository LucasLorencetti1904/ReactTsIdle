import Place, { Temperatures } from "../../entities/Place";
import Region from "../../entities/Region";

type placeProperties = {
    name: string,
    temperature: Temperatures,
    region: Region
};

const placeClasses: Record<string, new (...args: any) => Place> = {
    Place
};

export default function createPlace(placeType: string, { name, temperature, region}: placeProperties): Place {
    const SpecificPlace = placeClasses[placeType];
    if (!SpecificPlace) {
        throw new Error("This class doesn't exist.");
    }
    return new SpecificPlace(name, temperature, region);
}