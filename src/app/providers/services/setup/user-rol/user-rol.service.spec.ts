import { TestBed, inject } from '@angular/core/testing';

import { UserRolService } from './user-rol.service';

describe('UserRolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRolService],
    });
  });

  it('should be created', inject([UserRolService], (service: UserRolService) => {
    expect(service).toBeTruthy();
  }));
});
