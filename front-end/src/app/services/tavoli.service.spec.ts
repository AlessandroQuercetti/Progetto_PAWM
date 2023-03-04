import { TestBed } from '@angular/core/testing';

import { TavoliService } from './tavoli.service';

describe('TavoliService', () => {
  let service: TavoliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TavoliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
