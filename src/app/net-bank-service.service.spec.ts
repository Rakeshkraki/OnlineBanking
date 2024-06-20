import { TestBed } from '@angular/core/testing';

import { NetBankServiceService } from './net-bank-service.service';

describe('NetBankServiceService', () => {
  let service: NetBankServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetBankServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
