import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  hide = true;

  onSubmit(form: NgForm){
    this.authService.doLogIn(form.value.email, form.value.password).subscribe((data: any) => {
      console.log("dati: ", data);
      //probabilmente qua sara da fare un controllo per errori

    })
  }

}
