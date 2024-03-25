import { TestBed } from '@angular/core/testing';

import { TetrioService } from './tetrio.service';

describe('TetrioService', () => {
  let service: TetrioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TetrioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
