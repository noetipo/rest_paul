import { TestBed, inject } from '@angular/core/testing';

import { UserModuleService } from './user-module.service';

describe('UserModuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserModuleService],
    });
  });

  it('should be created', inject([UserModuleService], (service: UserModuleService) => {
    expect(service).toBeTruthy();
  }));
});
