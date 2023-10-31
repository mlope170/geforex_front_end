import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditActividadesComponent } from './form-edit-actividades.component';

describe('FormEditActividadesComponent', () => {
  let component: FormEditActividadesComponent;
  let fixture: ComponentFixture<FormEditActividadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditActividadesComponent]
    });
    fixture = TestBed.createComponent(FormEditActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
