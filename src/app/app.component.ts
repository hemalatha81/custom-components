import {
    Component, ViewEncapsulation
}
from '@angular/core';
import {
    FormControl
}
from '@angular/forms';
import {
    MatFormFieldAppearance
}
from '@angular/material/form-field';
import * as moment from 'moment';

@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss'], encapsulation: ViewEncapsulation.None }) export class AppComponent {
    // datepicker
    label ='select date';
    classname="datepickerOne";
    placeholdername = 'choose date';
    appearanceType: MatFormFieldAppearance = "fill";
    dateParent = new FormControl(moment());
    acceptData(event: any) {
        this.dateParent = event.date;
    }

    // radiovalue
    radiovalue: string=" ";
    season: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
    acceptRadioValue(event: any) {
        this.radiovalue=event.value;

    };

    // checkbox value
   checkboxvalue:Array<any>=[];
   countries : Array<any> = [
      { name: 'India', value: 'india' },
      { name: 'France', value: 'france' },
      { name: 'USA', value: 'USA' },
      { name: 'Germany', value: 'germany' },
      { name: 'Japan', value: 'Japan' }
    ];
    
    acceptCheckboxValue(event: any) {
        this.checkboxvalue=event.value;
   };


}
