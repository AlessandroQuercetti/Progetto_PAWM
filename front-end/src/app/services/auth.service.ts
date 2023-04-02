import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Ruolo } from '../interfacce/Ruolo';
import { Utente } from '../interfacce/utente';

const API = "https://restaurantdb-812bc-default-rtdb.europe-west1.firebasedatabase.app/"
const APIkey = 'AIzaSyDrDCuZa9Hfm6NNr0X4KH9suOYXC-Vw9YY';
const signupUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + APIkey;
const loginUrl =  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + APIkey;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor(private http: HttpClient, router: Router) {}

  doLogIn(email: string, password: string){
    //let params = new HttpParams().append('email', email).append('password', password);
    //quello mio ---- return this.http.get(API + 'utenti.json'); //where email = email && password = password
    //quello di ids ---- return this.http.post(API + 'login', null, {params: params}); //questa è quella giusta, anche headers da mettere
    return this.http.post(loginUrl, {email, password, returnSecureToken: true});
  }

  doLogOut(){
    this.isLoggedIn = false;
    localStorage.removeItem('utente');
  }

  salvaCurrentUser(nome: string, cognome: string, ruolo: Ruolo, email: string, token: string){
    this.isLoggedIn = true;
    let currentUser = {nome: nome, cognome: cognome, ruolo: ruolo, email: email, token: token}
    localStorage.setItem('utente', JSON.stringify(currentUser));
  }

  getCurrentUser(){
    return localStorage.getItem('utente');
  }

  doRegistrazioneUtente(nome: string, cognome: string, ruolo: Ruolo, email: string, password: string){
    //TODO controllo sull'email e sul codice del ristorante
    //this.http.post(API + "utenti.json", {nome: nome, cognome: cognome, ruolo: ruolo, email: email, password: password, ristorante: ristorante} );
    return this.http.post(signupUrl, {email: email, password: password, returnSecureToken: true});
  }

  doRegistrazioneRistorante(nome: string, email: string, password: string, codice: string) {
    console.log("registra ristorante da fare");
    //TODO controllo sull'email
    //return this.http.post(API + "ristoranti.json" , {nome: nome, email: email, password: password, codice: codice});
    //this.http.post(API + "ristoranti.json", {nome: nome, email: email, password: password} );
    //return this.http.post(signupUrl, {email: email, password: password, returnSecureToken: true});
  }


}
