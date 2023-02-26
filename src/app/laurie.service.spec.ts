import { TestBed } from '@angular/core/testing';

import { LaurieService } from './laurie.service';

describe('LaurieService', () => {
  let service: LaurieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaurieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
