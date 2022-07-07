import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  TokenRefreshActionTypes,
  tokenRefreshFailureAction,
  tokenRefreshSuccessAction
} from 'src/app/store/actions/token-refresh.action';

import { AuthService } from 'src/app/shared/service/auth.service';
import { PersistenceService } from 'src/app/shared/service/persistence.service';

import { AuthResponseInterface } from 'src/app/shared/interfaces/auth-response.interface';
import { BackendErrorsInterface } from 'src/app/shared/interfaces/backend-errors.interface';

@Injectable()
export class TokenRefreshEffect {
  refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TokenRefreshActionTypes.TOKEN_REFRESH),
      switchMap(() => {
        return this.authService.refreshToken().pipe(
          map((response) => {
            const authResp = response as AuthResponseInterface;
            this.persistenceService.set('access-token', authResp.accessToken);
            this.persistenceService.set('refresh-token', authResp.refreshToken);
            return tokenRefreshSuccessAction({ response: authResp });
          }),
          catchError((errorResponse: BackendErrorsInterface) => {
            this.persistenceService.clear();
            return of(tokenRefreshFailureAction({ errors: errorResponse }));
          })
        );
      })
    )
  );

  startRefreshTimer$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TokenRefreshActionTypes.TOKEN_REFRESH_SUCCESS),
        tap(({ response }) => {
          const responseData = response as AuthResponseInterface;
          if (responseData.refreshToken) {
            this.authService.startRefreshTokenTimer(responseData.accessToken);
          }
        })
      ),
    {
      dispatch: false
    }
  );

  constructor(
    private router: Router,
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService
  ) {}
}
