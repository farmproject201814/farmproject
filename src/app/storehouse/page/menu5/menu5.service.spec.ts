import { TestBed } from '@angular/core/testing';

import { Menu5Service } from './menu5.service';

describe('Menu5Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Menu5Service = TestBed.get(Menu5Service);
    expect(service).toBeTruthy();
  });
});
