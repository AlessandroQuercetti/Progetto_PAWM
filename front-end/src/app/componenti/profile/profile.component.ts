import { Component, OnInit } from '@angular/core';
import { Ruolo } from 'src/app/interfacce/Ruolo';
import { UtenteConInfo } from 'src/app/interfacce/utenteConInfo';
import { Utente } from 'src/app/models/utente.model';
import { AuthService } from 'src/app/services/auth.service';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  currentUser!: Utente;
  userConInfo!: UtenteConInfo;
  isProprietario: boolean = false;
  utenti: UtenteConInfo[] = [];

  constructor(private authService: AuthService, private utenteService: UtenteService) {}

  ngOnInit(): any{

    this.currentUser = this.authService.currentUser!;
    //this.userConInfo = this.authService.userConInfo!;
    //this.getUtenti()
    //this.isProprietario = (this.userConInfo.ruolo == Ruolo.PROPRIETARIO);

    this.isProprietario == true
    if(this.isProprietario){
      this.utenti = this.utenti.filter((utente: UtenteConInfo) => (utente.email != this.currentUser.email));
    }

  }

  eliminaUtente(id: string){
    this.utenteService.deleteUtente(id).subscribe(
      data => window.location.reload(),
      err => alert(err.error.message)
    );
  }

}
