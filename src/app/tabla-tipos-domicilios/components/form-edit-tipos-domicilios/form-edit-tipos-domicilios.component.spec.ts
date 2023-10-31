import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditTiposDomiciliosComponent } from './form-edit-tipos-domicilios.component';

describe('FormEditTiposDomiciliosComponent', () => {
  let component: FormEditTiposDomiciliosComponent;
  let fixture: ComponentFixture<FormEditTiposDomiciliosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditTiposDomiciliosComponent]
    });
    fixture = TestBed.createComponent(FormEditTiposDomiciliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
