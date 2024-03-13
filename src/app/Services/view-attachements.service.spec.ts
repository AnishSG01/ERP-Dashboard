import { TestBed } from '@angular/core/testing';

import { ViewAttachementsService } from './view-attachements.service';

describe('ViewAttachementsService', () => {
  let service: ViewAttachementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAttachementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
