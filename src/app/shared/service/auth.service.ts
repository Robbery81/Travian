import { Injectable } from '@angular/core';
import { LocalStorageService } from "src/app/shared/service/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(protected storage: LocalStorageService) {}

  public isLoggedIn(): boolean {
    console.log(this.storage);
    console.log(this.storage.getStorage());
    return true;
  }

}
