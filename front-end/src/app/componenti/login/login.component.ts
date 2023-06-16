import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UtenteService } from 'src/app/services/utente.service';
import { UtenteConInfo } from 'src/app/interfacce/utenteConInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService,
    private utenteService: UtenteService,
    private router: Router) {}

  hide = true;

  onSubmit(form: NgForm){
    this.authService.login(form.value.email, form.value.password).subscribe(
      (data: any) => {
        const expirationDate = new Date( new Date().getTime() + data.expiresIn * 1000)
        this.authService.salvaCurrentUser(data.localId, data.email, data.idToken, expirationDate)
        this.router.navigate(['']);
      } ,
      (err: any) => {
        //alert(err.err.error.message);
        alert("email o password errata")
        console.log(err)
        form.reset()
      }

    )
  }

}
