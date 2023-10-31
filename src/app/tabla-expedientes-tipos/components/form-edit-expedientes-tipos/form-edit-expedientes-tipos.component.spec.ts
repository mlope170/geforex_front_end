import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditExpedientesTiposComponent } from './form-edit-expedientes-tipos.component';

describe('FormEditExpedientesTiposComponent', () => {
  let component: FormEditExpedientesTiposComponent;
  let fixture: ComponentFixture<FormEditExpedientesTiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditExpedientesTiposComponent]
    });
    fixture = TestBed.createComponent(FormEditExpedientesTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
