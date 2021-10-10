import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';

const routes: Routes = [
  { path: "", component: WeatherSearchComponent },
  { path: "forecast/:zipCode", component: WeatherForecastComponent },
  {path: "**", redirectTo: "/", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
