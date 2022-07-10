import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { VillageActionTypes, villageFailureAction, villageSuccessAction } from 'src/app/store/actions/village.action';
import { pricesSuccessAction } from 'src/app/store/actions/prices.action';

import { UserService } from 'src/app/shared/service/user.service';

import { CurrentUserInterface } from 'src/app/shared/interfaces/current-user.interface';
import { BackendErrorsInterface } from 'src/app/shared/interfaces/backend-errors.interface';

@Injectable()
export class VillageEffect {
  village$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VillageActionTypes.DOWNLOAD),
      switchMap(() => {
        return this.userService.getUserProfile().pipe(
          map((response: CurrentUserInterface) => {
            this.store.dispatch(pricesSuccessAction({ resources: response.prices[0].resources }));
            return villageSuccessAction({ currentVillage: response.villages[0] });
          }),
          catchError((errorResponse: BackendErrorsInterface) => {
            return of(villageFailureAction({ errors: errorResponse }));
          })
        );
      })
    )
  );

  constructor(
    private store: Store,
    private router: Router,
    private actions$: Actions,
    private userService: UserService
  ) {}
}
