import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tavolo } from '../interfacce/tavolo';
import { AuthService } from './auth.service';

const API = "https://restaurantdb-812bc-default-rtdb.europe-west1.firebasedatabase.app/"

@Injectable({
  providedIn: 'root'
})
export class TavoliService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getToken(){
    return JSON.parse(this.authService.getCurrentUser()!).token
  }

  getTavoli(){
    let token_part = "?auth=" + this.getToken();
    return this.http.get<Tavolo[]>(API + 'tavoli.json' + token_part);
  }

  addTavolo(body: {}){
    let token_part = "?auth=" + this.getToken();
    return this.http.post(API + 'tavoli.json' + token_part, body);
  }

  deleteTavolo(idTavolo: string){
    let token_part = "?auth=" + this.getToken();
    return this.http.delete(API + 'tavoli/' + idTavolo + '.json' + token_part);
  }

  getTavolo(idTavolo: string){
    let token_part = "?auth=" + this.getToken();
    return this.http.get<Tavolo[]>(API + 'tavoli/' + idTavolo + '.json' + token_part);
  }

  patchTavolo(id: string, body: {}){
    return this.http.patch(API + 'tavoli/' + id + '.json', body);
  }

}
