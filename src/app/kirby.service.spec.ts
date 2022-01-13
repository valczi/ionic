import { TestBed } from '@angular/core/testing';

import { KirbyService } from './kirby.service';

describe('KirbyService', () => {
  let service: KirbyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KirbyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
