import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}

  getData<T>(key: string): T | '' {
    if (localStorage.getItem(key) != null) {
      return JSON.parse(localStorage.getItem(key)!);
    }
    return '';
  }

  setData<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  removeData(key: string): void {
    localStorage.removeItem(key);
  }
}
