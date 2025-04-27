import Region from "../../entities/Region";

type RegionProperties = {
    name: string,
    tier: number
};

const regionClasses: Record<string, new (...args: any) => Region> = {
    Region
};

export default function createRegion(regionType: string, { name, tier }: RegionProperties): Region {
    const SpecificRegion = regionClasses[regionType];
    if (!SpecificRegion) {
        throw new Error("This class doesn't exist.");
    }
    return new SpecificRegion(name, tier);
}