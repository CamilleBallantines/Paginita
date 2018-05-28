import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTranslationComponent } from './form-translation.component';

describe('FormTranslationComponent', () => {
  let component: FormTranslationComponent;
  let fixture: ComponentFixture<FormTranslationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTranslationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
