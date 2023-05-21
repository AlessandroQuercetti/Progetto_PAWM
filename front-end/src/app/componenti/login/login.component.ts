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
      (data: String) => {
        this.setParams(data)
      },
      (err: any) => {
        alert(err.error.message);
      }

    )
  }

  setParams(token: String){
    if(token != null && token != undefined){
      this.authService.salvaCurrentUser(token);
      this.router.navigate(['']);
    }

  }

}
