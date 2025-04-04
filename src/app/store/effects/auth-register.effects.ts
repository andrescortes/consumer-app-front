import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import {
  RegisterAction,
  RegisterActionTypes,
  RegisterActionClear,
  RegisterActionFailure,
  RegisterActionSuccess,
} from '../actions';
import { IApiResponse } from '../../shared/models';
import { AuthRegisterService } from '../../core/services/auth';

@Injectable()
export class AuthRegisterEffects {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType<RegisterAction>(RegisterActionTypes.REGISTER),
      exhaustMap((action) =>
        this.authRegisterService.register(action.payload).pipe(
          map(
            (response: IApiResponse) =>
              new RegisterActionSuccess(response.message)
          ),
          catchError((error: { message: string }) =>
            of(new RegisterActionFailure(error?.message))
          )
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
      map(() => new RegisterActionClear())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly authRegisterService: AuthRegisterService
  ) {}
}
