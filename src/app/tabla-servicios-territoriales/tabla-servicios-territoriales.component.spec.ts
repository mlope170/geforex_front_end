import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaServiciosTerritorialesComponent } from './tabla-servicios-territoriales.component';

describe('TablaServiciosTerritorialesComponent', () => {
  let component: TablaServiciosTerritorialesComponent;
  let fixture: ComponentFixture<TablaServiciosTerritorialesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaServiciosTerritorialesComponent]
    });
    fixture = TestBed.createComponent(TablaServiciosTerritorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
