import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utente } from '../interfacce/utente';

const url = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor(private http: HttpClient) {}

  doLogIn(email: string, password: string){
    let params = new HttpParams().append('email', email).append('password', password);
    return this.http.post(url + "login", { params: params })
  }

  doLogOut(){
    let token = ""
    this.isLoggedIn = false;
    localStorage.removeItem('utente');
    return this.http.post(url + "logout", token)
  }

  salvaCurrentUser(utente: Utente){
    this.isLoggedIn = true;
    localStorage.setItem('utente', JSON.stringify(utente));
  }

  getCurrentUser(){
    return localStorage.getItem('utente');
  }

}
