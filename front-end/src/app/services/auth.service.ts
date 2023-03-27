import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = true;

  constructor() { }


  getUtenti() {
  }

  doLogIn(user: string, pass: string){
  }

  doLogOut(){
  }
}
