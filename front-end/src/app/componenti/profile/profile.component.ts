import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utente.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  currentUser: Utente = new Utente('', ' ', ' ', new Date());
  isProprietario: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): any{

    setTimeout(() => {
      this.currentUser = this.authService.currentUser!;
      this.isProprietario = this.authService.isProprietario;
    }, 1000);

  }

}
