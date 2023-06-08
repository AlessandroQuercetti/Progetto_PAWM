import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'front-end';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {

    if(this.authService.getCurrentToken()){
      this.authService.isLoggedIn = true;
      //this.router.navigate(['']);
    }
  }
}
