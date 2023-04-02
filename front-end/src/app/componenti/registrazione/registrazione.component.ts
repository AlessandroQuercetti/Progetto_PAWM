import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ruolo } from 'src/app/interfacce/Ruolo';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit{

  selectedRuolo!: Ruolo;
  ruoli = Object.keys(Ruolo).filter(item => {return isNaN(Number(item))})
  hide = true;
  //vistaUtente = true;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(){
    //let tipo = this.route.snapshot.url[1].toString() //questo forse da cambiare quando cambio backend
    //this.vistaUtente = tipo == "utente" ? true: false;
  }

  onSubmit(form: NgForm){

    this.authService.doRegistrazioneUtente(
      form.value.nome, form.value.cognome, form.value.ruolo, form.value.email, form.value.password
    ).subscribe(
      data => {
        console.log(data)
        alert("REGISTRAZIONE EFFETTUATA");
        this.router.navigate(['profile']);
      },
      (err: any) => {
        alert(err.error.error.message);
      }
    );


    }
}

/*
    if(this.vistaUtente){
      this.authService.doRegistrazioneUtente(
        form.value.nome, form.value.cognome, form.value.ruolo, form.value.email, form.value.password
      ).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['profile']);
        },
        (err: any) => {
          alert(err.error.error.message);
        }
      );
    }else{
      console.log("registrazione ristorante da fare!");
      this.authService.doRegistrazioneRistorante(
        form.value.nome, form.value.email, form.value.password, form.value.codice
        ).subscribe(data => {
          console.log("dati dal subscribe, ristornante: ", data);
          this.router.navigate(['login']); //fallo se è andato a buon fine
        }
      );*/
