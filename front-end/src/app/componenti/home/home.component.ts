import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService, private router: Router) {} //private readonly router: Router

  onClickLogout() {
    //fai il log out
    //chiama componente del parent dal child e cambia valore
    //this.authService.doLogOut();
    this.router.navigate(["login"]);
  }

}
