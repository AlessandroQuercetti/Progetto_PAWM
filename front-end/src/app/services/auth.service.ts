import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  utenti = [
    {username: "user1", password: "pass1", nome: "nome1"},
    {username: "user2", password: "pass2", nome: "nome2"}
  ]

  constructor() { }

  getUtenti() {
    return this.utenti;
  }

  doLogIn(user: string, pass: string){

    let i = 0;
    let quantita = this.utenti.length;

    while(i!=quantita){
      if(user.match(this.utenti[i].username) && pass.match(this.utenti[i].password)){
        return true;
      }
      i++;
    }
    return false;

  }
}
