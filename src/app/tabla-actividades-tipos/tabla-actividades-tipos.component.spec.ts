import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaActividadesTiposComponent } from './tabla-actividades-tipos.component';

describe('TablaActividadesTiposComponent', () => {
  let component: TablaActividadesTiposComponent;
  let fixture: ComponentFixture<TablaActividadesTiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaActividadesTiposComponent]
    });
    fixture = TestBed.createComponent(TablaActividadesTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
