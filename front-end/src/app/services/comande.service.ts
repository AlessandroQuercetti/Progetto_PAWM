import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comanda } from '../interfacce/comanda';
import { MenuElement } from '../interfacce/menuElement';
import { AuthService } from './auth.service';
import { StatoComanda } from '../interfacce/StatoComanda';

const API = "https://restaurantdb-812bc-default-rtdb.europe-west1.firebasedatabase.app/"

@Injectable({
  providedIn: 'root'
})
export class ComandeService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getToken(){
    return JSON.parse(this.authService.getCurrentUser()!).token
  }

  getAllComande(){
    let token_part = "?auth=" + this.getToken();
    return this.http.get<Comanda[]>(API + 'comande.json' + token_part);
  }

  getComandeByTavolo(idTavolo: any){
    let token_part = "?auth=" + this.getToken();
    return this.http.get<Comanda[]>(API + 'comande.json/?tavolo=' + idTavolo);
  }

  addComanda(idTavolo: any, menuElements: MenuElement[], tipo: string){
    let token_part = "?auth=" + this.getToken();
    let body = {
      tavolo: idTavolo,
      stato: StatoComanda.ORDINATO,
      menuElements: menuElements,
      tipo: tipo
    }
    return this.http.post(API + 'comande.json' + token_part, body);
  }

  patchComanda(id: string, body: {}){
    let token_part = "?auth=" + this.getToken();
    return this.http.patch(API + 'comande/' + id + '.json', body);
  }

  deleteComanda(id: string){
    let token_part = "?auth=" + this.getToken();
    return this.http.delete(API + 'comande/' + id + '.json' + token_part);
  }

}
