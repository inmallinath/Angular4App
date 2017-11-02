import { TestBed, inject } from '@angular/core/testing';

import { GeomappingService } from './geomapping.service';

describe('GeomappingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeomappingService]
    });
  });

  it('should be created', inject([GeomappingService], (service: GeomappingService) => {
    expect(service).toBeTruthy();
  }));
});
