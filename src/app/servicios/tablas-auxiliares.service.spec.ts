import { TestBed } from '@angular/core/testing';

import { TablasAuxiliaresService } from './tablas-auxiliares.service';

describe('TablasAuxiliaresService', () => {
  let service: TablasAuxiliaresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablasAuxiliaresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
