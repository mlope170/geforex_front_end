import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditPoblacionesComponent } from './form-edit-poblaciones.component';

describe('FormEditPoblacionesComponent', () => {
  let component: FormEditPoblacionesComponent;
  let fixture: ComponentFixture<FormEditPoblacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditPoblacionesComponent]
    });
    fixture = TestBed.createComponent(FormEditPoblacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
