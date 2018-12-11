import { TestBed } from '@angular/core/testing';

import { SumgradingService } from './sumgrading.service';

describe('SumgradingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SumgradingService = TestBed.get(SumgradingService);
    expect(service).toBeTruthy();
  });
});
