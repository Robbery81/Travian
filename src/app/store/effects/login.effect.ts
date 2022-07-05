import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoginActionTypes, loginFailureAction, loginSuccessAction } from 'src/app/store/actions/login.action';
import { catchError, switchMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from 'src/app/shared/service/auth.service';
import { BackendErrorsInterface } from 'src/app/shared/interfaces/backend-errors.interface';
import { AuthResponseInterface } from 'src/app/shared/interfaces/auth-response.interface';
import { PersistenceService } from 'src/app/shared/service/persistence.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { tokenRefreshAction } from 'src/app/store/actions/token-refresh.action';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActionTypes.LOGIN),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((response: AuthResponseInterface) => {
            this.persistenceService.set('access-token', response.accessToken);
            this.persistenceService.set('refresh-token', response.accessToken);

            return loginSuccessAction({ currentUser: response.user });
          }),
          catchError((errorResponse: BackendErrorsInterface) => {
            this.persistenceService.clear();
            return of(loginFailureAction({ errors: errorResponse }));
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActionTypes.LOGIN_SUCCESS),
        tap(() => {
          this.store.dispatch(tokenRefreshAction());
          this.router.navigate(['/']);
        })
      ),
    {
      dispatch: false
    }
  );

  constructor(
    private store: Store,
    private router: Router,
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService
  ) {}
}
