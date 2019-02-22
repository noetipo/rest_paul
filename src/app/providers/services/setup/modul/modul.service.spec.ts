import { TestBed, inject } from '@angular/core/testing';

import { ModulService } from './modul.service';

describe('ModulService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModulService],
    });
  });

  it('should be created', inject([ModulService], (service: ModulService) => {
    expect(service).toBeTruthy();
  }));
});
