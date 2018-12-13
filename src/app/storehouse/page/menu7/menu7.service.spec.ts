import { TestBed } from '@angular/core/testing';

import { Menu7Service } from './menu7.service';

describe('Menu7Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Menu7Service = TestBed.get(Menu7Service);
    expect(service).toBeTruthy();
  });
});
