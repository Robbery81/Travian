import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';

import { Store } from '@ngrx/store';
import { tokenRefreshAction } from 'src/app/store/actions/token-refresh.action';

import { AppStateInterface } from 'src/app/store/states/app.state';
import { AuthResponseInterface } from 'src/app/shared/interfaces/auth-response.interface';
import { LoginRequestInterface } from 'src/app/shared/interfaces/login-request.interface';

import { PersistenceService } from 'src/app/shared/service/persistence.service';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static readonly LOGIN = `${environment.baseUrl}/auth/login/`;
  private static readonly UPDATE_TOKEN = `${environment.baseUrl}/auth/login/access-token`;

  private refreshTokenTimeout: any;

  constructor(
    private store: Store<AppStateInterface>,
    private http: HttpClient,
    private router: Router,
    private persistenceService: PersistenceService
  ) {}

  public isLoggedIn(): boolean {
    return !!this.token;
  }

  public login(user: LoginRequestInterface): Observable<AuthResponseInterface> {
    return this.http.post<AuthResponseInterface>(AuthService.LOGIN, user);
  }

  public refreshToken() {
    const token = this.persistenceService.get('refresh-token');

    if (!token) {
      this.router.navigate(['/login']);
      return of(new Error());
    }

    return this.http.post(AuthService.UPDATE_TOKEN, { refreshToken: token });
  }

  public startRefreshTokenTimer(token: string) {
    const jwtToken = JSON.parse(atob(token.split('.')[1]));

    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - new Date().getTime();

    this.refreshTokenTimeout = setTimeout(() => this.store.dispatch(tokenRefreshAction()), timeout);
  }

  public logout(): void {
    //this.setToken(null);
    this.stopRefreshTokenTimer();
    this.router.navigate(['/login']);
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }

  get token(): string {
    return this.persistenceService.get('access-token') || '';
  }
}
