import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {IWeather} from '../weather.interface';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  weather$!: Observable<IWeather>
  zipCode!: string

  constructor(
    private route: ActivatedRoute,
    private service: WeatherService
  ) {}

  ngOnInit(): void {
    this.zipCode = this.route.snapshot.paramMap.get('zipCode') || '';
    this.weather$ = this.service.getWeatherFromZipcode(this.zipCode)
  }


  showIcon(icon: string) {
    return this.service.showImage(icon)
  }

  

}
