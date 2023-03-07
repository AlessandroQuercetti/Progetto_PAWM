import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = null;

  isLoggedIn = false;
  logInFailed = false;

  getErrorMessage(){
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(){
    console.log(this.email, this.password);
    let risposta = this.authService.doLogIn(String(this.email), this.password!); //vedi se questo cast va bene, non lo so
    if(risposta)
      this.isLoggedIn = true;
    else
      alert("login errato");

  }

}
