import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaExpedientesTiposComponent } from './tabla-expedientes-tipos.component';

describe('TablaExpedientesTiposComponent', () => {
  let component: TablaExpedientesTiposComponent;
  let fixture: ComponentFixture<TablaExpedientesTiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaExpedientesTiposComponent]
    });
    fixture = TestBed.createComponent(TablaExpedientesTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
