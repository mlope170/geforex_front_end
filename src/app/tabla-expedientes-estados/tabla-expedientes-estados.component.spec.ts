import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaExpedientesEstadosComponent } from './tabla-expedientes-estados.component';

describe('TablaExpedientesEstadosComponent', () => {
  let component: TablaExpedientesEstadosComponent;
  let fixture: ComponentFixture<TablaExpedientesEstadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaExpedientesEstadosComponent]
    });
    fixture = TestBed.createComponent(TablaExpedientesEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
