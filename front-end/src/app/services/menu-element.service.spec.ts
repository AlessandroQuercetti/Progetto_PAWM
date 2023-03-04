import { TestBed } from '@angular/core/testing';

import { MenuElementService } from './menu-element.service';

describe('MenuElementService', () => {
  let service: MenuElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
