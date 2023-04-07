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
export class RegistrazioneComponent{

  selectedRuolo!: Ruolo;
  ruoli = Object.keys(Ruolo).filter(item => {return isNaN(Number(item))})
  hide = true;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}


  onSubmit(form: NgForm){

    this.authService.doRegistrazioneUtente(
      form.value.nome, form.value.cognome, this.selectedRuolo, form.value.email, form.value.password
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
