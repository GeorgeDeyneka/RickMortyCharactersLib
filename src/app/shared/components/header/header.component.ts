import { AfterViewInit, Component } from '@angular/core';
import { decodedGoogleToken } from 'src/app/models/interfaces/decoded.interface';
import { AuthService } from '../../services/auth.service';
import { SessionStorageService } from '../../services/session-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  protected userData: decodedGoogleToken;
  protected activeBtn: boolean = false;

  constructor(
    private authService: AuthService,
  ) {}

  ngAfterViewInit(): void {
    this.authService.initGoogle();
    this.userData = this.authService.decodeToken();
  }

  openLogoutBtn() {
    this.activeBtn = true;
  }

  closeLogoutBtn() {
    this.activeBtn = false;
  }
}
