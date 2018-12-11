import { TestBed } from '@angular/core/testing';

import { Menu3Service } from './menu3.service';

describe('Menu3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Menu3Service = TestBed.get(Menu3Service);
    expect(service).toBeTruthy();
  });
});
