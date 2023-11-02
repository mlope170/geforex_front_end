import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRegistroEntradaComponent } from './tabla-registro-entrada.component';

describe('TablaRegistroEntradaComponent', () => {
  let component: TablaRegistroEntradaComponent;
  let fixture: ComponentFixture<TablaRegistroEntradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaRegistroEntradaComponent]
    });
    fixture = TestBed.createComponent(TablaRegistroEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
