import { TestBed } from '@angular/core/testing';

import { NumberGeneratingService } from './number-generating.service';

describe('NumberGeneratingService', () => {
  let service: NumberGeneratingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberGeneratingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
