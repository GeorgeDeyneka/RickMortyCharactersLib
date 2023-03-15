import { Injectable } from '@angular/core';
import { CredentialResponse } from 'google-one-tap';
import { SessionStorageService } from './session-storage.service';
import jwt_decode from 'jwt-decode';
import { decodedGoogleToken } from 'src/app/models/interfaces/decoded.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private sessionStorageService: SessionStorageService) {}

  initGoogle() {
    if (this.sessionStorageService.getData('token')) return;
    this.initGoogleAuth();
    this.initGoogleButton();
    this.initGooglePrompt();
  }

  initGoogleAuth() {
    window.google.accounts.id.initialize({
      client_id:
        '540624650745-g079h75k25g9aciqp1pl56giuf1kq8t2.apps.googleusercontent.com',
      auto_select: false,
      cancel_on_tap_outside: false,
      callback: (e) =>
        this.sessionStorageService.setData('token', e.credential),
    });
  }

  decodeToken() {
    const token: string = this.sessionStorageService.getData('token');
    const decoded: decodedGoogleToken = jwt_decode(token);
    return decoded;
  }

  initGoogleButton() {
    window.google.accounts.id.renderButton(
      document.querySelector('#google-auth')!,
      {
        theme: 'outline',
        size: 'large',
        width: 100,
        text: 'signin',
        locale: 'en',
      }
    );
  }

  initGooglePrompt() {
    window.google.accounts.id.prompt();
  }
}
