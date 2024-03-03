import { TestBed } from '@angular/core/testing';

import { InvoiceOnHoldService } from './invoice-on-hold.service';

describe('InvoiceOnHoldService', () => {
  let service: InvoiceOnHoldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceOnHoldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
