import { TestBed } from '@angular/core/testing';

import { UtiltityService } from './utiltity.service';

describe('UtiltityService', () => {
  let service: UtiltityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtiltityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
