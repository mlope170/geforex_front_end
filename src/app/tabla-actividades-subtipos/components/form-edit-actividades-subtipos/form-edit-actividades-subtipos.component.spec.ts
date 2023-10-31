import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditActividadesSubtiposComponent } from './form-edit-actividades-subtipos.component';

describe('FormEditActividadesSubtiposComponent', () => {
  let component: FormEditActividadesSubtiposComponent;
  let fixture: ComponentFixture<FormEditActividadesSubtiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditActividadesSubtiposComponent]
    });
    fixture = TestBed.createComponent(FormEditActividadesSubtiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
