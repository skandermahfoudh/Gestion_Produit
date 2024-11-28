import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { produitsGuard } from './produits.guard';

describe('produitsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() =>  produitsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
