import { TestBed, inject } from '@angular/core/testing';

import { UserMenuService } from './user-menu.service';

describe('UserMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserMenuService],
    });
  });

  it('should be created', inject([UserMenuService], (service: UserMenuService) => {
    expect(service).toBeTruthy();
  }));
});
