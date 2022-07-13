import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent {
  label ='select date';
  classname="datepickerOne";
  placeholdername = 'choose date';
  appearanceType: MatFormFieldAppearance = "fill";
  dateParent = new FormControl(moment());



  acceptData(event: any) {
    this.dateParent = event.date;
    console.log("date in parent",this.dateParent)
  }
}
