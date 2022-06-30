import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly _storage;

  constructor() {
    this._storage = window.localStorage;
  }

  getStorage() {
    return this._storage;
  }

}
