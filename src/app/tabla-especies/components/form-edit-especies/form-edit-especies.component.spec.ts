import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditEspeciesComponent } from './form-edit-especies.component';

describe('FormEditEspeciesComponent', () => {
  let component: FormEditEspeciesComponent;
  let fixture: ComponentFixture<FormEditEspeciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditEspeciesComponent]
    });
    fixture = TestBed.createComponent(FormEditEspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
