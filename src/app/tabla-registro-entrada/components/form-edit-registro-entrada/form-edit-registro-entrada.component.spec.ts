import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditRegistroEntradaComponent } from './form-edit-registro-entrada.component';

describe('FormEditRegistroEntradaComponent', () => {
  let component: FormEditRegistroEntradaComponent;
  let fixture: ComponentFixture<FormEditRegistroEntradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditRegistroEntradaComponent]
    });
    fixture = TestBed.createComponent(FormEditRegistroEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
