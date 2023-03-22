import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService) {}

  onClickLogout() {
    //fai il log out
    //chiama componente del parent dal child e cambia valore
    this.authService.doLogOut();
  }

}
