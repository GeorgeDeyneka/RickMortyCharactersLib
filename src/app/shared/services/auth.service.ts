import { Injectable } from '@angular/core';
import { CredentialResponse } from 'google-one-tap';
import jwt_decode from 'jwt-decode';
import { decodedGoogleToken } from 'src/app/models/interfaces/decoded.interface';
import { BehaviorSubject } from 'rxjs';
import { authUserData } from 'src/app/models/interfaces/auth-user-data.interface';
import { LocalStorageService } from './local-storage.service';

export const defaultUserData: authUserData = {
  name: '',
  email: '',
  image: '',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userData$ = new BehaviorSubject<authUserData>(
    this.localStorageService.getData('userData', defaultUserData)
  );

  constructor(private localStorageService: LocalStorageService) {}

  public getUserData() {
    return this.userData$.asObservable();
  }

  public setUserData(data: authUserData) {
    this.userData$.next(data);
  }

  public initGoogleAuth() {
    window.google.accounts.id.initialize({
      client_id:
        '540624650745-g079h75k25g9aciqp1pl56giuf1kq8t2.apps.googleusercontent.com',
      auto_select: false,
      cancel_on_tap_outside: false,
      callback: (e) => this.decodeToken(e.credential),
    });
  }

  public initGoogleButton() {
    window.google.accounts.id.renderButton(
      document.querySelector('#google-auth')!,
      {
        theme: 'filled_blue',
        size: 'large',
        width: 150,
        text: 'signin',
        locale: 'en',
      }
    );
  }

  public initGooglePrompt() {
    window.google.accounts.id.prompt();
  }

  private decodeToken(credential: string) {
    const decoded: decodedGoogleToken = jwt_decode(credential);
    const authorizedUsedData: authUserData = {
      name: decoded.name,
      image: decoded.picture,
      email: decoded.email,
    };

    this.localStorageService.setData('userData', authorizedUsedData);
    this.localStorageService.setData('token', credential);

    this.setUserData(authorizedUsedData);
  }
}
