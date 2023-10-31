import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditTiposDocumentosComponent } from './form-edit-tipos-documentos.component';

describe('FormEditTiposDocumentosComponent', () => {
  let component: FormEditTiposDocumentosComponent;
  let fixture: ComponentFixture<FormEditTiposDocumentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditTiposDocumentosComponent]
    });
    fixture = TestBed.createComponent(FormEditTiposDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
