import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BuildActionTypes, buildFailureAction, buildSuccessAction } from 'src/app/store/actions/build.action';

import { UserService } from 'src/app/shared/service/user.service';

import { BuildingDto } from 'src/app/shared/interfaces/building.dto';

import { BackendErrorsInterface } from 'src/app/shared/interfaces/backend-errors.interface';

@Injectable()
export class BuildEffect {
  build$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BuildActionTypes.BUILD),
      switchMap(({ request }) => {
        return this.userService.build(request).pipe(
          map((response) => {
            return buildSuccessAction({ buildInfo: new BuildingDto(response.villages[0].building) });
          }),
          catchError((errorResponse: BackendErrorsInterface) => {
            return of(buildFailureAction({ errors: errorResponse }));
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
