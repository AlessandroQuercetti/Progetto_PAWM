import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Utente } from '../interfacce/utente';

const url = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getToken(){
    return JSON.parse(this.authService.getCurrentUser()!).token
  }

  getUtente(id: string){
    return this.http.get<Utente>(url + 'utente/' + id);
  }

  getUtenti(){
    return this.http.get<Utente[]>(url + 'utente');
  }

  deleteUtente(id: string){
    return this.http.delete(url + 'utente/' + id);
  }

  patchUtente(id: string, u: Utente){
    return this.http.patch(url + 'utenti/' + id, u);
  }

  addUtente(u: Utente){
    return this.http.post(url + "utenti", u);
  }

}
