import { TestBed, inject } from '@angular/core/testing';

import { RolModuleService } from './rol-module.service';

describe('RolModuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolModuleService],
    });
  });

  it('should be created', inject([RolModuleService], (service: RolModuleService) => {
    expect(service).toBeTruthy();
  }));
});
