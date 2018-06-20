import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-general',
  templateUrl: './form-general.component.html',
  styleUrls: ['./form-general.component.scss'],
})
export class FormGeneralComponent implements OnInit {

  formGeneral: FormGroup;

  constructor(private fb:FormBuilder) {}

  ngOnInit() {

    this.formGeneral= this.fb.group({
      nameGeneralForm: ['', [Validators.required, Validators.minLength(3)]], 
      emailGeneralForm: ['', [Validators.required, Validators.email]], 
      countryGeneralForm: ['', [Validators.required, Validators.minLength(3)]],
      textGeneralForm: ['', []],
    })
  }

  get nameGeneralForm() {
    return this.formGeneral.get('nameGeneralForm');
  }
  get emailGeneralForm() {
    return this.formGeneral.get('emailGeneralForm');
  }
  get countryGeneralForm() {
    return this.formGeneral.get('countryGeneralForm');
  }
 
}
