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
}
