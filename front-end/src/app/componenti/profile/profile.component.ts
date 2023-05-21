import { Component, OnInit } from '@angular/core';
import { Ruolo } from 'src/app/interfacce/Ruolo';
import { Utente } from 'src/app/interfacce/utente';
import { AuthService } from 'src/app/services/auth.service';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  currentUser!: any; //currentUser!: Utente;
  isProprietario: boolean = false;
  utenti: Utente[] = [];

  constructor(private authService: AuthService, private utenteService: UtenteService) {}

  ngOnInit(): any{
    this.currentUser = JSON.parse(this.authService.getCurrentUser()!)
    this.isProprietario = (this.currentUser.role == Ruolo.PROPRIETARIO);
    this.isProprietario = true;

    if(this.isProprietario){
      this.utenteService.getUtenti().subscribe((data:Utente[]) => {
        this.utenti = data.filter((utente) => (utente.id != this.currentUser.id));
      })
    }

  }

  eliminaUtente(id: string){
    this.utenteService.deleteUtente(id).subscribe(
      data => window.location.reload(),
      err => alert(err.error.message)
    );
  }

}
