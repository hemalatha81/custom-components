import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS
} from "@angular/material/core";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { DatePipe } from "@angular/common";
import * as moment from 'moment';
import { MatFormFieldAppearance } from '@angular/material/form-field';

export const MY_FORMATS = {
  parse: {
    dateInput: "YYYY-MM-DD HH:mm:ss"
  },
  display: {
    dateInput: "YYYY-MM-DD",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "YYYY-MM-DD HH:mm:ss",
    monthYearA11yLabel: "MMMM YYYY"
  }
};

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    DatePipe
  ]
})
export class DatepickerComponent implements OnInit {
   date = new FormControl(moment());
  @Input() label: any | undefined;
  @Input()  appearance: MatFormFieldAppearance='fill';
  @Input() placeholdername: any | undefined;
  @Input() className: any | undefined;
  @Output() datepickerValue = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }

  sendDateValue() {
    this.datepickerValue.emit({date:this.date})
  }

}
