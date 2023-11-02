import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPoblacionesComponent } from './tabla-poblaciones.component';

describe('TablaPoblacionesComponent', () => {
  let component: TablaPoblacionesComponent;
  let fixture: ComponentFixture<TablaPoblacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaPoblacionesComponent]
    });
    fixture = TestBed.createComponent(TablaPoblacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
