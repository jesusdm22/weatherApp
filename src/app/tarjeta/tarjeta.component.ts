import { Component, OnInit } from '@angular/core';
import { CurrentWeatherItem } from '../models/CurrentWeatherItem';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {


  urlBase;
  endpoints: string[] =["forecast?","current?"];
  currentWeather = new CurrentWeatherItem();
  key;
  url;

  
  constructor(private _http: HttpClient) {
    this.urlBase = "http://api.weatherstack.com/";
    this.key = "access_key=087faf140cf208c4075bc0173ccef406&query=";
   }

  ngOnInit(): void {
    this.getActual("Barcelona");
  }

  getActual(ciudad: string){
    this.url = this.urlBase + this.endpoints[1] + this.key + ciudad;
    this._http.get<any>(this.url).subscribe(
      data => {
        this.currentWeather = data.current;
        console.log(this.currentWeather);
      },
      
      error => {

      });
  }
}
