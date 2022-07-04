import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActionTypesEnum, loginFailureAction, loginSuccessAction } from 'src/app/store/actions/login.action';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from 'src/app/shared/service/auth.service';
import { CurrentUserInterface } from 'src/app/shared/interfaces/current-user.interface';
import { BackendErrorsInterface } from 'src/app/shared/interfaces/backend-errors.interface';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypesEnum.LOGIN),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return loginSuccessAction({ currentUser });
          }),
          catchError((errorResponse: BackendErrorsInterface) => {
            return of(loginFailureAction({ errors: errorResponse }));
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
