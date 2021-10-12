import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IWeather} from '../weather.interface';
import {Observable, throwError} from 'rxjs';
import {WeatherService} from '../weather.service';
import {catchError} from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-weather-tab',
    templateUrl: './weather-tab.component.html',
    styleUrls: ['./weather-tab.component.css'],
})
export class WeatherTabComponent implements OnInit {

    @Input() zipCode!: string;
    @Output() delete: EventEmitter<string> = new EventEmitter();

    weather$!: Observable<IWeather>

    constructor(
        private service: WeatherService,
        private toastr: ToastrService
    ) {
    }

    ngOnInit(): void {
        this.weather$ = this.service.getWeatherFromZipcode(this.zipCode).pipe(
            catchError(httpError => {

                //catching the error, if the zipcode is not found, i will emit the same event emitted when i click on the 'X'
                this.deletePlace()

                // Display error toastr 
                this.showToastr();
                return throwError(httpError)
                
            })
        );
    }

    showIcon(icon: string) {
        return this.service.showImage(icon);
    }

    deletePlace() {
        this.delete.emit(this.zipCode)
    }

    showToastr() {
        this.toastr.warning('Zip Code not found','Error', {
            timeOut: 3000,
            tapToDismiss: true,
            positionClass: 'toast-top-right'
        });
    }

}
