import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaActividadesSubtiposComponent } from './tabla-actividades-subtipos.component';

describe('TablaActividadesSubtiposComponent', () => {
  let component: TablaActividadesSubtiposComponent;
  let fixture: ComponentFixture<TablaActividadesSubtiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaActividadesSubtiposComponent]
    });
    fixture = TestBed.createComponent(TablaActividadesSubtiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
