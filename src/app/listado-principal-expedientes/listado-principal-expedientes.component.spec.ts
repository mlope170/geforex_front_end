import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPrincipalExpedientesComponent } from './listado-principal-expedientes.component';

describe('ListadoPrincipalExpedientesComponent', () => {
  let component: ListadoPrincipalExpedientesComponent;
  let fixture: ComponentFixture<ListadoPrincipalExpedientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoPrincipalExpedientesComponent]
    });
    fixture = TestBed.createComponent(ListadoPrincipalExpedientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
