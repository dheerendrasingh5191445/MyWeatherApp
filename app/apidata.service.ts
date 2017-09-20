import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import {Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class WeatherService {

private heroesUrl = 'http://api.openweathermap.org/data/2.5/forecast?appid=e6fcda39d98976a2d7be8f9102bd5fa7&';  // URL to web api
constructor(private http: Http) { }
Data:any={};


getData(term: string){

  	return this.http
             .get(`${this.heroesUrl}q=${term}`)
             .map((response:Response)=>response.json());

}



}
