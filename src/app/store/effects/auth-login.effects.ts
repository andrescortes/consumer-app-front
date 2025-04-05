import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthLoginService } from '../../core/services/auth';
import {
  LoginAction,
  LoginActionClear,
  LoginActionFailure,
  LoginActionSuccess,
  LoginActionTypes,
} from '../actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { ITokenResponse } from '../../shared/models';

@Injectable()
export class AuthLoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoginAction>(LoginActionTypes.LOGIN),
      exhaustMap((action) =>
        this.authLoginService.login(action.payload).pipe(
          map((response: ITokenResponse) => new LoginActionSuccess(response)),
          catchError((error: { message: string }) =>
            of(new LoginActionFailure(error?.message))
          )
        )
      )
    )
  );

  clear$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActionTypes.LOGIN_FAILURE, LoginActionTypes.LOGOUT),
      map(() => new LoginActionClear())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly authLoginService: AuthLoginService
  ) {}
}
