import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { appReducer } from 'src/app/store/reducers/app.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRouting } from './app.routing';

import { JwtInterceptor } from 'src/app/shared/interseptors/jwt.interceptor';
import { appInitializer } from 'src/app/shared/interseptors/app.initializer';
import { ErrorInterceptor } from 'src/app/shared/interseptors/error.interceptor';

import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/shared/service/auth.service';
import { AppComponent } from './app.component';

import { LoginEffect } from 'src/app/store/effects/login.effect';
import { TokenRefreshEffect } from 'src/app/store/effects/token-refresh.effect';
import { VillageEffect } from 'src/app/store/effects/village.effect';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRouting,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([LoginEffect, TokenRefreshEffect, VillageEffect])
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
