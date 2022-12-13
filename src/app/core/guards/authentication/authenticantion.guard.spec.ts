import { TestBed } from '@angular/core/testing';

import { AuthenticantionGuard } from './authenticantion.guard';

describe('AuthenticantionGuard', () => {
  let guard: AuthenticantionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticantionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
