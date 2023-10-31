import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditActividadesTiposComponent } from './form-edit-actividades-tipos.component';

describe('FormEditActividadesTiposComponent', () => {
  let component: FormEditActividadesTiposComponent;
  let fixture: ComponentFixture<FormEditActividadesTiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditActividadesTiposComponent]
    });
    fixture = TestBed.createComponent(FormEditActividadesTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
