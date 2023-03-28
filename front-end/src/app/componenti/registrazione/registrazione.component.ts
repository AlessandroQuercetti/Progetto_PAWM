import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit{

  hide = true;
  vistaUtente = true;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(){
    this.vistaUtente = this.route.snapshot.paramMap.get('tipo') == "utente" ? true: false;
  }

  onSubmit(form: NgForm){

    if(this.vistaUtente){
      this.authService.doRegistrazioneUtente(
        form.value.nome, form.value.cognome, form.value.ruolo, form.value.email, form.value.password, form.value.codice
        ).subscribe(data => {
          console.log("dati dal subscribe, utente: ", data);
          this.router.navigate(['login']); //fallo se è andato a buon fine
        }
      );
    }else{
      this.authService.doRegistrazioneRistorante(
        form.value.nome, form.value.email, form.value.password, form.value.codice
        ).subscribe(data => {
          console.log("dati dal subscribe, ristornante: ", data);
          this.router.navigate(['login']); //fallo se è andato a buon fine
        }
      );
    }

  }

}
