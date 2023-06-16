import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent{

  hide = true;

  idUtente!: string|null;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(){

  }

  onSubmit(form: NgForm){
    console.log(form.value)
    this.registra(form);
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

}

