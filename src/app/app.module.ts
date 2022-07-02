import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from 'src/app/shared/interseptors/error.interceptor';
import { JwtInterceptor } from 'src/app/shared/interseptors/jwt.interceptor';
import { AuthService } from 'src/app/shared/service/auth.service';
import { appInitializer } from 'src/app/shared/interseptors/app.initializer';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRouting, BrowserModule, HttpClientModule],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
