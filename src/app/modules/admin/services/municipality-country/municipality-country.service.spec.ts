import { TestBed } from '@angular/core/testing';

import { MunicipalityCountryService } from './municipality-country.service';

describe('MunicipalityCountryService', () => {
  let service: MunicipalityCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunicipalityCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
