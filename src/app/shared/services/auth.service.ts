import { Injectable } from '@angular/core';
import { CredentialResponse } from 'google-one-tap';
import { SessionStorageService } from './session-storage.service';
import jwt_decode from 'jwt-decode';
import { decodedGoogleToken } from 'src/app/models/interfaces/decoded.interface';
import { BehaviorSubject } from 'rxjs';
import { authUserData } from 'src/app/models/interfaces/auth-user-data.interface';

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
    this.sessionStorageService.getData('userData', defaultUserData)
  );

  constructor(private sessionStorageService: SessionStorageService) {}

  getUserData() {
    return this.userData$.asObservable();
  }

  setUserData(data: authUserData) {
    this.userData$.next(data);
  }

  initGoogleAuth() {
    window.google.accounts.id.initialize({
      client_id:
        '540624650745-g079h75k25g9aciqp1pl56giuf1kq8t2.apps.googleusercontent.com',
      auto_select: false,
      cancel_on_tap_outside: false,
      callback: (e) => this.decodeToken(e.credential),
    });
  }

  initGoogleButton() {
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

  initGooglePrompt() {
    window.google.accounts.id.prompt();
  }

  decodeToken(credential: string) {
    const decoded: decodedGoogleToken = jwt_decode(credential);

    const authorizedUsedData: authUserData = {
      name: decoded.name,
      image: decoded.picture,
      email: decoded.email,
    };

    this.sessionStorageService.setData('userData', authorizedUsedData);
    this.sessionStorageService.setData('token', credential);

    this.setUserData(authorizedUsedData);
  }
}
