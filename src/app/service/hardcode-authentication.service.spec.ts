import { TestBed } from '@angular/core/testing';

import { HardcodedAuthenticationService } from './hardcode-authentication.service';

describe('HardcodeAuthenticationService', () => {
  let service: HardcodedAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
