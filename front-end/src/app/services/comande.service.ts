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

    let statoElements: StatoComanda[] = [];
    for(let i=0; i<menuElements.length; i++ ) statoElements[i] = StatoComanda.ORDINATO;

    let body = {
      tavolo: idTavolo,
      menuElements: menuElements,
      tipo: tipo,
      statoElements: statoElements
    }
    return this.http.post(API + 'comande.json' + token_part, body);
  }

  patchComanda(id: string, body: {}){
    let token_part = "?auth=" + this.getToken();
    return this.http.patch(API + 'comande/' + id + '.json', body);
  }

  patchStatoElemento(comanda: Comanda, index: number){
    let appoggio: StatoComanda[] = comanda.statoElements;
    appoggio[index] = appoggio[index]+1;
    return this.patchComanda(comanda.id!, { statoElements: appoggio });
  }

  //prende lo stato da cambiare, ci fa +1
  patchStatoComanda(comanda: Comanda, stato: StatoComanda){
    let appoggio: StatoComanda[] = [];
    for(let i=0; i<comanda.statoElements.length; i++){
      appoggio[i] = (comanda.statoElements[i] == stato) ? stato+1 : comanda.statoElements[i];
    }
    return this.patchComanda(comanda.id!, { statoElements: appoggio });
  }

  deleteComanda(id: string){
    let token_part = "?auth=" + this.getToken();
    return this.http.delete(API + 'comande/' + id + '.json' + token_part);
  }

  deleteComandeByTavolo(idTavolo: String){
    let token_part = "?auth=" + this.getToken();
    alert("delete comande by tavolo da fare")
    return this.http.delete(API + 'comande/' +  + '.json' + token_part);
  }

}
