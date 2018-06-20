import { Component, OnInit, TemplateRef } from '@angular/core';
import { SendComponent} from '../send/send.component';
import { FormBuilder} from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { Validators} from '@angular/forms';

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
 
}
