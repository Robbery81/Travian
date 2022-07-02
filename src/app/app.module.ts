import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/shared/service/auth.service';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { JwtInterceptor } from 'src/app/shared/interseptors/jwt.interceptor';
import { appInitializer } from 'src/app/shared/interseptors/app.initializer';
import { ErrorInterceptor } from 'src/app/shared/interseptors/error.interceptor';
import { appReducer } from 'src/app/store/reducers/app.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRouting,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
