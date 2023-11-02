import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditProvinciasComponent } from './form-edit-provincias.component';

describe('FormEditProvinciasComponent', () => {
  let component: FormEditProvinciasComponent;
  let fixture: ComponentFixture<FormEditProvinciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditProvinciasComponent]
    });
    fixture = TestBed.createComponent(FormEditProvinciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
