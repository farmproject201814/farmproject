import { TestBed } from '@angular/core/testing';

import { GradingService } from './grading.service';

describe('GradingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GradingService = TestBed.get(GradingService);
    expect(service).toBeTruthy();
  });
});
