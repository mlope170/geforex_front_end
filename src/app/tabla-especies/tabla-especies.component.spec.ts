import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEspeciesComponent } from './tabla-especies.component';

describe('TablaEspeciesComponent', () => {
  let component: TablaEspeciesComponent;
  let fixture: ComponentFixture<TablaEspeciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaEspeciesComponent]
    });
    fixture = TestBed.createComponent(TablaEspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
