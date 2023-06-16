import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ruolo } from 'src/app/interfacce/Ruolo';
import { UtenteConInfo } from 'src/app/interfacce/utenteConInfo';
import { AuthService } from 'src/app/services/auth.service';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent{

  selectedRuolo!: Ruolo;
  ruoli = Object.keys(Ruolo).filter(item => {return isNaN(Number(item))})
  hide = true;

  idUtente!: string|null;
  tipoOperazione!: number;
  utente!: UtenteConInfo;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute,
    private utenteService: UtenteService) {}

  ngOnInit(){
    this.idUtente = this.route.snapshot.paramMap.get('id');
    if(this.idUtente == null)
      this.tipoOperazione = 0;
    else{
      this.tipoOperazione = 1;
      this.utenteService.getUtente(this.idUtente).subscribe((data: UtenteConInfo) => {
        this.utente = data
      })
    }

  }

  onSubmit(form: NgForm){
    console.log(form.value)

    if(this.tipoOperazione == 0)
      this.registra(form);
    else
      this.modifica(form);
  }

  registra(form: NgForm){

    this.authService.registrazione(form.value.email, form.value.password)
      .subscribe(
        (data: any) => {
          alert("registrazione avvenuta con successo")
          this.router.navigate(['profile']);
          //crea anche l'utente sulla tab normale
        }
      );

    form.reset();
  }

  modifica(form: NgForm){
    this.utenteService.modificaUtente(form.value).subscribe(
      (data: any) => {
        alert("modifica avvenuta con successo")
        this.router.navigate(['profile']);
        //modifica anche utente normale
      }
    );
  }

}

