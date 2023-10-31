import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditExpedientesEstadosComponent } from './form-edit-expedientes-estados.component';

describe('FormEditExpedientesEstadosComponent', () => {
  let component: FormEditExpedientesEstadosComponent;
  let fixture: ComponentFixture<FormEditExpedientesEstadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditExpedientesEstadosComponent]
    });
    fixture = TestBed.createComponent(FormEditExpedientesEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
