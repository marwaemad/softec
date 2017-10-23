import { WeatherList } from './weather.model';
import { location } from './location.model';
import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Jsonp, Http } from '@angular/http';

@Injectable()
export class weatherListService {

  private apiUrl = 'http://api.openweathermap.org/data/2.5/forecast/';
  private locationApi = 'http://ip-api.com/json';
  constructor(private _jsonp: Jsonp, private _http: Http) {
  }
  public getlocation(): Observable<any> {
    return this._http.get(this.locationApi).map((response: Response) => <any>response.json().city);
  }
  public getWeather(cityName: string, unit: string): Observable<WeatherList> {
    return this._http.get(this.apiUrl + 'daily?q=' + cityName + '&mode=json' + '&cnt=1' + '&units=' + unit + '&appid=78c9f5478d9a0bc961c480ab27c67f10')
      .map((response: Response) => <any>response.json());
  }
}