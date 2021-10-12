import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {IWeather} from "./weather.interface";

@Injectable({
    providedIn: 'root'
})

export class WeatherService {


    url: string = "https://api.openweathermap.org/data/2.5/forecast/daily";
    displayZipes: string[] = []
    retrievedDataFromStorage!: string | null;

    

    constructor(
        private http: HttpClient
    ) {
    }

    getWeatherFromZipcode(zipCode: string): Observable<IWeather> {
        const options = {
            params: {
                zip: zipCode,
                appid: '5a4b2d457ecbef9eb2a71e480b947604',
                units: 'metric'
            }
        }
        return this.http.get<IWeather>(this.url, options)
    }

    showImage(weatherIcon: string) {
        if (weatherIcon === "Sun") {
            return "./assets/images/sun.png";
        } else if (weatherIcon === "Rain") {
            return "./assets/images/rain.png";
        } else if (weatherIcon === "Snow") {
            return "./assets/images/snow.png";
        } else (weatherIcon === "Clouds")
        return "./assets/images/clouds.png";
    }



}
