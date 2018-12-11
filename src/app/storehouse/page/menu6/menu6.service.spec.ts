import { TestBed } from '@angular/core/testing';

import { Menu6Service } from './menu6.service';

describe('Menu6Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Menu6Service = TestBed.get(Menu6Service);
    expect(service).toBeTruthy();
  });
});
