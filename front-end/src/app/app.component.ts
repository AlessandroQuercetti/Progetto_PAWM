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
    if(localStorage.getItem('utente')){
      const utente = JSON.parse(localStorage.getItem('utente')!)
      this.authService.salvaCurrentUser(utente.id, utente.email, utente._token, utente._expirationDate)
    }
  }
}
