import { TestBed, inject } from '@angular/core/testing';

import { PartidaService } from './partida.service';

describe('PartidaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartidaService],
    });
  });

  it('should be created', inject([PartidaService], (service: PartidaService) => {
    expect(service).toBeTruthy();
  }));
});
