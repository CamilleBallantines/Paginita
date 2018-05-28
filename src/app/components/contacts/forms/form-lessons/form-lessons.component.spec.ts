import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLessonsComponent } from './form-lessons.component';

describe('FormLessonsComponent', () => {
  let component: FormLessonsComponent;
  let fixture: ComponentFixture<FormLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
