import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { AuthService } from '../../../core/services/auth/auth.service';
import {
  Register,
  RegisterActionTypes,
  RegisterClear,
  RegisterFailure,
  RegisterSuccess,
} from '../../actions';
import { IApiResponse } from '../../../shared/models';

@Injectable()
export class AuthRegisterEffects {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType<Register>(RegisterActionTypes.REGISTER),
      exhaustMap((action) =>
        this.authService.register(action.payload).pipe(
          map(
            (response: IApiResponse) => new RegisterSuccess(response.message)
          ),
          catchError((error: { message: string }) => {
            return of(new RegisterFailure(error?.message));
          })
        )
      )
    )
  );

  clear$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        RegisterActionTypes.REGISTER_SUCCESS,
        RegisterActionTypes.REGISTER_FAILURE
      ),
      map(() => new RegisterClear())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService
  ) {}
}
