import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  @Output() sendToParent = new EventEmitter();
  @Input() radioValue: string | undefined;
  @Input() radioList: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  radioChange($event: MatRadioChange) {
    this.sendToParent.emit({value:$event.value})

  }

}
