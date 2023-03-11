import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  constructor(private http: HttpClient) {}

  protected path: string = 'character';

  private BASE_URL: string = 'https://rickandmortyapi.com/api/';

  getList<T>(params: string = ''): Observable<T> {
    return this.http.get<T>(this.BASE_URL + this.path + params);
  }

  getById<T>(id: string | number): Observable<T> {
    return this.http.get<T>(this.BASE_URL + this.path + id);
  }
}
