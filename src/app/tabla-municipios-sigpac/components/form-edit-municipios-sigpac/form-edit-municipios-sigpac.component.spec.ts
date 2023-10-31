import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditMunicipiosSigpacComponent } from './form-edit-municipios-sigpac.component';

describe('FormEditMunicipiosSigpacComponent', () => {
  let component: FormEditMunicipiosSigpacComponent;
  let fixture: ComponentFixture<FormEditMunicipiosSigpacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditMunicipiosSigpacComponent]
    });
    fixture = TestBed.createComponent(FormEditMunicipiosSigpacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
