import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-translation',
  templateUrl: './form-translation.component.html',
  styleUrls: ['./form-translation.component.scss']
})
export class FormTranslationComponent implements OnInit {

  formTranslation: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.formTranslation= this.fb.group({
      nameTranslationForm: ['', [Validators.required, Validators.minLength(3)]], 
      emailTranslationForm: ['', [Validators.required, Validators.email]], 
      countryTranslationForm: ['', [Validators.required, Validators.minLength(3)]],
      textTranslationForm: ['', []],
      sdateTranslationForm: ['', [Validators.required]],
      numberTranslationForm: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      edateTranslationForm: ['', [Validators.required]],
    })

  }

  get nameTranslationForm() {
    return this.formTranslation.get('nameTranslationForm');
  }
  get emailTranslationForm() {
    return this.formTranslation.get('emailTranslationForm');
  }
  get countryTranslationForm() {
    return this.formTranslation.get('countryTranslationForm');
  }
  get numberTranslationForm() {
    return this.formTranslation.get('numberTranslationForm');
  }

}
