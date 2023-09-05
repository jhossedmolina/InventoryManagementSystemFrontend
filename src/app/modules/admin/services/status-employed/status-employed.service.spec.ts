import { TestBed } from '@angular/core/testing';

import { StatusEmployedService } from './status-employed.service';

describe('StatusEmployedService', () => {
  let service: StatusEmployedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusEmployedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
