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
        } else {
          this.hideGoogleBtn = false;
        }
        this.cdRef.detectChanges();
      });
    });
  }

  ngAfterViewInit(): void {
    this.authService.initGoogleAuth();

    if (!this.userData.email) {
      this.authService.initGooglePrompt();
    }

    this.authService.initGoogleButton();
  }

  protected openLogoutBtn() {
    this.activeBtn = true;
  }

  protected closeLogoutBtn() {
    this.activeBtn = false;
  }

  protected logOut() {
    this.sessionStorageService.removeData('userData');
    this.sessionStorageService.removeData('token');
    this.authService.setUserData(defaultUserData);
  }
}
