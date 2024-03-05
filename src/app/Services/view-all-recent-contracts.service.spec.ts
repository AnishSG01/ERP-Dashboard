import { TestBed } from '@angular/core/testing';

import { ViewAllRecentContractsService } from './view-all-recent-contracts.service';

describe('ViewAllRecentContractsService', () => {
  let service: ViewAllRecentContractsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAllRecentContractsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
