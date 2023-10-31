import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTiposDomiciliosComponent } from './tabla-tipos-domicilios.component';

describe('TablaTiposDomiciliosComponent', () => {
  let component: TablaTiposDomiciliosComponent;
  let fixture: ComponentFixture<TablaTiposDomiciliosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaTiposDomiciliosComponent]
    });
    fixture = TestBed.createComponent(TablaTiposDomiciliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
