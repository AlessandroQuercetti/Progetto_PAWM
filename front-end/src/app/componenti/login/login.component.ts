import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {}

  hide = true;

  onSubmit(form: NgForm){
    this.authService.doLogIn(form.value.email, form.value.password).subscribe(
      (data: any) => {
        this.authService.salvaCurrentUser(data.nome, data.cognome, data.ruolo, data.email, data.idToken);
        this.router.navigate(['']);
      },
      (err: any) => {
        alert(err.error.error.message);
      }

    )
  }



}
