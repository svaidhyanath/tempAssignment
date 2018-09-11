import { TestBed, inject } from '@angular/core/testing';

import { SharedAppServicesService } from './shared-app-services.service';

describe('SharedAppServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedAppServicesService]
    });
  });

  it('should be created', inject([SharedAppServicesService], (service: SharedAppServicesService) => {
    expect(service).toBeTruthy();
  }));
});
