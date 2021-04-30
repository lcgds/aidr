import { TestBed } from '@angular/core/testing';

import { HqService } from './hq.service';

describe('HqService', () => {
  let service: HqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
