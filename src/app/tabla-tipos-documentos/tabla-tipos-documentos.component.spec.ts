import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTiposDocumentosComponent } from './tabla-tipos-documentos.component';

describe('TablaTiposDocumentosComponent', () => {
  let component: TablaTiposDocumentosComponent;
  let fixture: ComponentFixture<TablaTiposDocumentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaTiposDocumentosComponent]
    });
    fixture = TestBed.createComponent(TablaTiposDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
