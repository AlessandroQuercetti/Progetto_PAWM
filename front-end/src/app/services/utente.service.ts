import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Utente } from '../interfacce/utente';

const API = "https://restaurantdb-812bc-default-rtdb.europe-west1.firebasedatabase.app/"

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getToken(){
    return JSON.parse(this.authService.getCurrentUser()!).token
  }

  getUtenti(){
    let token_part = "?auth=" + this.getToken();
    return this.http.get<Utente[]>(API + 'utenti.json' + token_part);
  }

  deleteUtente(id: string){
    let token_part = "?auth=" + this.getToken();
    return this.http.delete(API + 'utenti/' + id + '.json' + token_part);
  }

  patchUtente(id: string, body: {}){
    return this.http.patch(API + 'utenti/' + id + '.json', body);
  }

  //addUtente sta su authservice
}
