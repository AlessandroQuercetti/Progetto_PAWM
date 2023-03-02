import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  utenti = [
    {username: "user1", password: "pass1", nome: "nome1"},
    {username: "user2", password: "pass2", nome: "nome2"}
  ]

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = null;

  isLoggedIn = false;
  logInFailed = false;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onClickLoginButton(){
    console.log(this.email, this.password);

  }
}
