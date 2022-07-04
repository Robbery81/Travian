import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthResponseInterface } from 'src/app/shared/interfaces/auth-response.interface';
import { LoginRequestInterface } from 'src/app/shared/interfaces/login-request.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static readonly LOGIN = `${environment.baseUrl}/auth/login/`;
  private static readonly UPDATE_TOKEN = `${environment.baseUrl}/auth/login/access-token`;

  private refreshTokenTimeout: any;

  constructor(private http: HttpClient, private router: Router) {}

  public isLoggedIn(): boolean {
    return !!this.token;
  }

  /*public login(user: LoginRequestInterface): Observable<AuthResponseInterface> {
    return this.http.post<AuthResponseInterface>(AuthService.LOGIN, user).pipe(
      tap((res) => {
        this.setToken(res);
        this.startRefreshTokenTimer();
      })
    );
  }*/

  public login(user: LoginRequestInterface): Observable<AuthResponseInterface> {
    return this.http.post<AuthResponseInterface>(AuthService.LOGIN, user).pipe(
      map((response) => {
        this.setToken(response);
        this.startRefreshTokenTimer();
        return response;
      })
    );
  }

  public refreshToken() {
    const token = localStorage.getItem('refresh-token');

    if (!token) {
      return of(this.router.navigate(['/login']));
    }

    return this.http.post(AuthService.UPDATE_TOKEN, { refreshToken: token }).pipe(
      tap((res) => {
        this.setToken(res);
        this.startRefreshTokenTimer();
      })
    );
  }

  private setToken(response: any) {
    if (!response) {
      localStorage.clear();
    }

    localStorage.setItem('access-token', response.accessToken);
    localStorage.setItem('refresh-token', response.refreshToken);
  }

  private startRefreshTokenTimer() {
    const token = localStorage.getItem('access-token') || '';
    const jwtToken = JSON.parse(atob(token.split('.')[1]));

    // set a timeout to refresh the token a minute before it expires
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - new Date().getTime();
    this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }

  get token(): string {
    return localStorage.getItem('access-token') || '';
  }

  public logout(): void {
    this.setToken(null);
    this.stopRefreshTokenTimer();
    this.router.navigate(['/login']);
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
