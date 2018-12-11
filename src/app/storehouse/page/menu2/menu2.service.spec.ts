import { TestBed } from '@angular/core/testing';

import { Menu2Service } from './menu2.service';

describe('Menu2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Menu2Service = TestBed.get(Menu2Service);
    expect(service).toBeTruthy();
  });
});
