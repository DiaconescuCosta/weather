import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { WeatherTabComponent } from './weather-tab/weather-tab.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule, 
    HttpClientModule,
    NgbModule, 
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    WeatherTabComponent,
    WeatherSearchComponent,
    WeatherForecastComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
