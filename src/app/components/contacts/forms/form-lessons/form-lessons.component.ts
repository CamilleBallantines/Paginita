import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-lessons',
  templateUrl: './form-lessons.component.html',
  styleUrls: ['./form-lessons.component.scss']
})
export class FormLessonsComponent implements OnInit {

  formLessons: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.formLessons= this.fb.group({
      nameLessonsForm: ['', [Validators.required, Validators.minLength(3)]], 
      emailLessonsForm: ['', [Validators.required, Validators.email]], 
      countryLessonsForm: ['', [Validators.required, Validators.minLength(3)]],
      textLessonsForm: ['', []],
      dateLessonsForm: ['', [Validators.required]],
      ageLessonsForm: ['', [Validators.required]],
      levelLessonsForm: ['', [Validators.required]],
    })

  }

  get nameLessonsForm() {
    return this.formLessons.get('nameLessonsForm');
  }
  get emailLessonsForm() {
    return this.formLessons.get('emailLessonsForm');
  }
  get countryLessonsForm() {
    return this.formLessons.get('countryLessonsForm');
  }

}
