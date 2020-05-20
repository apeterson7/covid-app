import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Covid19RootObject } from '../model/covid19';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey: string
  private weatherApiUrl: string;

  constructor(private http: HttpClient) { 
    this.weatherApiUrl = 'https://api.weather.com/v3/wx/disease/tracker/';
    this.apiKey = '5424e9662cbf4bc3a4e9662cbf4bc3fe';
  }

  public findByZipCode(zipcode: String): Observable<Covid19RootObject> {  
    return this.http.get<Covid19RootObject>(this.weatherApiUrl+'county/60day?postalKey='+zipcode+':US&format=json&apiKey='+this.apiKey);
  }

  public findByCoordinates(lat: number, long: number): Observable<Covid19RootObject> {  
    return this.http.get<Covid19RootObject>(this.weatherApiUrl+'county/60day?geocode='+lat.toString()+','+long.toString()+'&format=json&apiKey='+this.apiKey);
  }


}
