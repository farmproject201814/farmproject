import { TestBed } from '@angular/core/testing';

import { Menu1Service } from './menu1.service';

describe('Menu1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Menu1Service = TestBed.get(Menu1Service);
    expect(service).toBeTruthy();
  });
});
