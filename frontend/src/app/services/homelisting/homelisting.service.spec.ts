import { TestBed } from '@angular/core/testing';

import { HomelistingService } from './homelisting.service';

describe('HomelistingService', () => {
  let service: HomelistingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomelistingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
