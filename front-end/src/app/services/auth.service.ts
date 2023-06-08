import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utente } from '../interfacce/utente';
import { UtenteService } from './utente.service';

const url = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor(private utenteService: UtenteService, private http: HttpClient) {}

  //login e return del token (di tipo string)
  doLogIn(email: string, password: string){
    let params = new HttpParams().append('email', email).append('password', password);
    return this.http.post<String>(url + "login", { params: params })
  }

  //TODO vedi se è meglio passare il token negli headers
  doLogOut(){
    let token = localStorage.getItem('token');
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    return this.http.post(url + "logout", token)
  }

  //salva utente e token nel local storage
  salvaCurrentUser(token: String){
    let utente: Utente|null = null;
    this.utenteService.getUtenteByToken(token).subscribe(
      (data: Utente) => {
        utente = data;
      }
    )

    if(utente != null && utente != undefined){
      this.isLoggedIn = true;
      localStorage.setItem('utente', JSON.stringify(utente));
      localStorage.setItem('token', JSON.stringify(token));
    }

  }

  getCurrentUser(){
    return localStorage.getItem('utente');
  }

  getCurrentToken(){
    return localStorage.getItem('token');
  }

}
