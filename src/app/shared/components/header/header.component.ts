import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit,
} from '@angular/core';
import { authUserData } from 'src/app/models/interfaces/auth-user-data.interface';
import { AuthService, defaultUserData } from '../../services/auth.service';
import { SessionStorageService } from '../../services/session-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  protected userData: authUserData;
  protected activeBtn: boolean = false;
  protected hideGoogleBtn: boolean;

  constructor(
    private ngZone: NgZone,
    private authService: AuthService,
    private sessionStorageService: SessionStorageService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.authService.getUserData().subscribe((data: authUserData) => {
      this.ngZone.run(() => {
        this.userData = data;
        if (data.email) {
          this.hideGoogleBtn = true;
          this.activeBtn = false;
        }
        this.cdRef.detectChanges();
      });
    });
  }
  // add keyframes

  ngAfterViewInit(): void {
    this.authService.initGoogleAuth();
    this.authService.initGoogleButton();

    if (!this.userData.email) {
      this.authService.initGooglePrompt();
    }
  }

  openLogoutBtn() {
    this.activeBtn = true;
  }

  closeLogoutBtn() {
    this.activeBtn = false;
  }

  logOut() {
    this.sessionStorageService.removeData('userData');
    this.sessionStorageService.removeData('token');
    this.authService.setUserData(defaultUserData);
    this.hideGoogleBtn = false;
  }
}
