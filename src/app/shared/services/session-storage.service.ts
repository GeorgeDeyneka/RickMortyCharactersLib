import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}

  public getData<T>(key: string, returnedValue?: any): T | any {
    if (localStorage.getItem(key) != null) {
      return JSON.parse(localStorage.getItem(key)!);
    }
    return returnedValue || '';
  }

  public setData<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public removeData(key: string): void {
    localStorage.removeItem(key);
  }
}
