import { TestBed, inject } from '@angular/core/testing';

import { PermisoGuardService } from './permiso-guard.service';

describe('PermisoGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermisoGuardService],
    });
  });

  it('should be created', inject([PermisoGuardService], (service: PermisoGuardService) => {
    expect(service).toBeTruthy();
  }));
});
