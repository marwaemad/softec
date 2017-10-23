import { WeatherList } from './weather.model';
import { location } from './location.model';
import { weatherListService } from './weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss'],
    providers: [weatherListService]
})
export class weatherListComponent implements OnInit {
    public weatherlist: WeatherList = new WeatherList();
    public weatherUrl: string = "http://openweathermap.org/img/w/";
    public extension: string = '.png';
    public icon: string = '';
    public location: string;
    public unit: string = "metric"
    constructor(private weatherservice: weatherListService) { }

    ngOnInit() {
        this.getLocation();
        this.changetoC();

    }
    private changetoF() {
        this.unit = "Imperial";
        this.getLocation();


    }
    private changetoC() {
        this.unit = "metric";
        this.getLocation();
    }
    private getLocation() {
        this.weatherservice.getlocation().subscribe((res) => {
            this.location = res;
            this.getweather(this.location, this.unit);
            // console.log(this.location);
        })
    }
    private getweather(cityname, unit) {

        this.weatherservice.getWeather(cityname, unit).subscribe((res) => {
            this.weatherlist = res;
            console.log(this.weatherlist);
            this.weatherlist.list.forEach(list =>
                list.weather.forEach(icon => this.icon = this.weatherUrl + icon.icon + this.extension)
            );

        })
    }

}
