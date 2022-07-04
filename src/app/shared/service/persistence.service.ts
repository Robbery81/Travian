import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(String(localStorage.getItem(key)));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }

  clear(): void {
    localStorage.clear();
  }
}
