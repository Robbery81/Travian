import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActionTypesEnum, loginFailureAction, loginSuccessAction } from 'src/app/store/actions/login.action';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from 'src/app/shared/service/auth.service';
import { CurrentUserInterface } from 'src/app/shared/interfaces/current-user.interface';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypesEnum.LOGIN),
      switchMap(({ request }) => {
        console.log(request);
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            console.log('loginSuccessAction');
            return loginSuccessAction({ currentUser });
          }),
          catchError(() => {
            return of(loginFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
