export class WeatherList {
    public cod: string;
    public message: number;
    public city: city = new city();
    public list: list[] = [];
    public cnt: number;

}
export class city {
    public id: number;
    public name: string;
    public country: string;
    public coord: coord;
    public population: number;
}
export class coord {
    public lon: number;
    public lat: number;
}
export class list {
    public dt: number;
    public temp: temp;
    public pressure: number;
    public humidity: number;
    public weather: weather[] = [];
    public speed: number;
    public deg: number;
    public clouds: number;
}
export class temp {
    public day: number;
    public min: number;
    public max: number;
    public night: number;
    public eve: number;
    public morn: number;

}
export class weather {
    public id: number;
    public main: string;
    public description: string;
    public icon: string;
}
