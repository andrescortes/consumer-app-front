import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { AuthService } from '../../../core/services/auth/auth.service';
import {
  Register,
  RegisterActionTypes,
  RegisterFailure,
  RegisterSuccess,
} from '../../actions';
import { IApiResponse } from '../../../shared/models';

@Injectable()
export class AuthRegisterEffects {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType<Register>(RegisterActionTypes.REGISTER),
      tap(() => console.log('Register effect')),
      exhaustMap((action) =>
        this.authService.register(action.payload).pipe(
          tap((result) => console.log('Register effect: ', result)),
          map(
            (response: IApiResponse) => new RegisterSuccess(response.message)
          ),
          catchError((error: { message: string }) => {
            console.error('Register effect error: ', error);
            return of(new RegisterFailure(error?.message));
          })
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService
  ) {}
}
