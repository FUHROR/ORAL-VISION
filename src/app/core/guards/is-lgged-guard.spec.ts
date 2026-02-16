import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isLggedGuard } from './is-lgged-guard';

describe('isLggedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isLggedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
