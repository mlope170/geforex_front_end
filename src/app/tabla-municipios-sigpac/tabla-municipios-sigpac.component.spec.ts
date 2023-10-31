import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMunicipiosSigpacComponent } from './tabla-municipios-sigpac.component';

describe('TablaMunicipiosSigpacComponent', () => {
  let component: TablaMunicipiosSigpacComponent;
  let fixture: ComponentFixture<TablaMunicipiosSigpacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaMunicipiosSigpacComponent]
    });
    fixture = TestBed.createComponent(TablaMunicipiosSigpacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
