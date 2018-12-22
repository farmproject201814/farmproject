import { TestBed } from '@angular/core/testing';

import { CalculateGService } from './calculate-g.service';

describe('CalculateGService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculateGService = TestBed.get(CalculateGService);
    expect(service).toBeTruthy();
  });
});
