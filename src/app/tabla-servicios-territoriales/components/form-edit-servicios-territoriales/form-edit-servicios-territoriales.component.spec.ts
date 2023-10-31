import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditServiciosTerritorialesComponent } from './form-edit-servicios-territoriales.component';

describe('FormEditServiciosTerritorialesComponent', () => {
  let component: FormEditServiciosTerritorialesComponent;
  let fixture: ComponentFixture<FormEditServiciosTerritorialesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditServiciosTerritorialesComponent]
    });
    fixture = TestBed.createComponent(FormEditServiciosTerritorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
