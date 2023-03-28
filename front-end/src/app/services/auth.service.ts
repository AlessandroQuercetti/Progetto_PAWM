import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Ruolo } from '../interfacce/Ruolo';
import { Utente } from '../interfacce/utente';

const API = "https://restaurantdb-812bc-default-rtdb.europe-west1.firebasedatabase.app/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor(private http: HttpClient, router: Router) {}

  doLogIn(email: string, password: string){

    //non so se fare i controlli qua o no
      this.isLoggedIn = true;
      this.salvaCurrentUser("", "", Ruolo.ACCOGLIENZA, email, password) //il ruolo lo prendi dopo ovviamente

    return this.http.get(API + 'utenti.json'); //where email = email && password = password
  }

  doLogOut(){
    localStorage.removeItem('utente');
  }

  salvaCurrentUser(nome: string, cognome: string, ruolo: Ruolo, email: string, password: string){
    let currentUser = {nome: nome, cognome: cognome, ruolo: ruolo, email: email, password: password, token: ""}
    localStorage.setItem('utente ', JSON.stringify(currentUser));
  }

  getCurrentUser(){
    return localStorage.getItem('utente');
  }

  doRegistrazioneUtente(nome: string, cognome: string, ruolo: Ruolo, email: string, password: string, codiceRistorante: string){
    //TODO controllo sull'email
    return this.http.post(API + "utenti.json", {nome: nome, cognome: cognome, ruolo: ruolo, email: email, password: password, codiceRistorante: codiceRistorante});
  }

  doRegistrazioneRistorante(nome: string, email: string, password: string, codice: string) {
    //TODO controllo sull'email
    return this.http.post(API + "ristoranti.json" , {nome: nome, email: email, password: password, codice: codice});
  }


}
