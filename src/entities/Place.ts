import Region from "./Region";

export type Temperatures =
    | "cold"
    | "warm"
    | "hot"
;

export default class Place {
    
    public constructor(
        public name: string,
        public temperature: Temperatures,
        public region: Region
    ) {
        this.name = name;
        this.temperature = temperature;
        this.region = region;
    }
}