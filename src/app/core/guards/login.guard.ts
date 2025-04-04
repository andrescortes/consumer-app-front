import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAuthLoginIsAuthenticated } from '../../store/selectors';
import { take, tap } from 'rxjs';

export const loginGuard: CanActivateFn = (route, state) => {
  return inject(Store)
    .select(selectAuthLoginIsAuthenticated)
    .pipe(
      take(1),
      tap((isAuth) => {
        if (!isAuth) {
          inject(Router).navigate(['auth/login']);
        }
      })
    );
};
