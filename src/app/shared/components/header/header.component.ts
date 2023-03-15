import { AfterViewInit, Component } from '@angular/core';
import { decodedGoogleToken } from 'src/app/models/interfaces/decoded.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  protected userData: decodedGoogleToken;

  constructor(private authService: AuthService) {}

  ngAfterViewInit(): void {
    this.authService.initGoogle();
    this.userData = this.authService.decodeToken();
  }
}
