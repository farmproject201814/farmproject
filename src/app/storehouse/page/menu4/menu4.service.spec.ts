import { TestBed } from '@angular/core/testing';

import { Menu4Service } from './menu4.service';

describe('Menu4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Menu4Service = TestBed.get(Menu4Service);
    expect(service).toBeTruthy();
  });
});
