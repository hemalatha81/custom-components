import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent  {
  @Output() sendToParent = new EventEmitter();
  @Input() checkboxValue: string | undefined
  @Input() checkboxList: Array<any> =[];

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
     selectedValues:  new FormArray([])
    });
  }

  onCheckboxChange(event: any) {
  const selectedValues = (this.form.controls['selectedValues'] as FormArray);
    if (event.target.checked) {
      selectedValues.push(new FormControl(event.target.value));
    } else {
      const index = selectedValues.controls
      .findIndex(x => x.value === event.target.value);
      selectedValues.removeAt(index);
    }
    this.sendToParent.emit({value:this.form.value})

  }

  submit() {
    console.log(this.form.value);
  }
}


