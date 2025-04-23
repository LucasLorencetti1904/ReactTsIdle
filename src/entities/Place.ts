type temperatureTypes = "cold" | "warm" | "hot";

export default class Place {
    public name: string;
    public temperature: TemperatureTypes;
    public region: Region;
    
    public constructor(
        name: string,
        temperature: TemperatureTypes
        region: Region
    ) {
        this.name = name;
        this.temperature = temperature;
        this.region = region;
    }
}
