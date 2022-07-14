import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { AppStateInterface } from 'src/app/store/states/app.state';

import { environment } from 'src/environments/environment';
import { CurrentUserInterface } from 'src/app/shared/interfaces/current-user.interface';
import { UpdateFieldInterface } from 'src/app/shared/interfaces/update-field.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static readonly BUILD = `${environment.baseUrl}/users/build/`;
  private static readonly PROFILE = `${environment.baseUrl}/users/profile/`;

  constructor(private store: Store<AppStateInterface>, private http: HttpClient) {}

  public getUserProfile(): Observable<CurrentUserInterface> {
    return this.http.get<CurrentUserInterface>(UserService.PROFILE);
  }

  public build(updateField: UpdateFieldInterface): Observable<CurrentUserInterface> {
    return this.http.patch<CurrentUserInterface>(UserService.BUILD, updateField);
  }
}
