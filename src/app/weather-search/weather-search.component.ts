import {
    Component,
    OnInit,
} from '@angular/core';
import {Observable} from 'rxjs';
import {WeatherService} from '../weather.service';
import {IWeather} from '../weather.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-weather-search',
    templateUrl: './weather-search.component.html',
    styleUrls: ['./weather-search.component.css'],
})
export class WeatherSearchComponent implements OnInit {
    zipCodes: string[] = [];
    form: FormGroup;
    


    constructor(
        private fb: FormBuilder,
    ) {
        this.form = this.fb.group({
            input: ['', [Validators.required]],
        });
    }

    ngOnInit() {
        const retrievedDataFromStorage = localStorage.getItem('zipCodes');
        this.zipCodes = retrievedDataFromStorage !== null ? JSON.parse(retrievedDataFromStorage) : [];
    }

    deletePlace(zipCode: string) {
        this.zipCodes = this.zipCodes.filter(e => e !== zipCode);

        //updating the zipcodes list in localStorage
        localStorage.setItem('zipCodes', JSON.stringify(this.zipCodes));
       
    }

    onSubmit() {
        if (this.form.invalid) {
            return
        }
        
        // removing double zipCodes
        this.zipCodes.push(this.form.get('input')?.value);
        this.zipCodes = [...new Set(this.zipCodes)]


        localStorage.setItem('zipCodes', JSON.stringify(this.zipCodes));
        

        // clean input field
        this.form.get('input')?.setValue("")

        
        
    }

   
}
