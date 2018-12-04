import { TestBed } from '@angular/core/testing';

import { AboutcattleService } from './aboutcattle.service';

describe('AboutcattleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AboutcattleService = TestBed.get(AboutcattleService);
    expect(service).toBeTruthy();
  });
});
