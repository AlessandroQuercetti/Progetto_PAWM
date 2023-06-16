import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comanda } from '../models/comanda';
import { MenuElement } from '../models/menuElement';
import { AuthService } from './auth.service';
import { StatoComanda } from '../models/StatoComanda';

const url = "https://restaurantdb-aeb27-default-rtdb.europe-west1.firebasedatabase.app/"

@Injectable({
  providedIn: 'root'
})
export class ComandeService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  addComanda(idTavolo: any, menuElements: MenuElement[], tipo: string){

    let statoElements: StatoComanda[] = [];
    for(let i=0; i<menuElements.length; i++ ) statoElements[i] = StatoComanda.ORDINATO;

    let body: Comanda = {
      tipo: tipo,
      statoElements: statoElements,
      tavolo: idTavolo,
      menuElements: menuElements
    }
    return this.http.post(url + 'comanda.json', body);
  }

  modificaComanda(id: any, body: {}){
    return this.http.patch(url + 'comanda/' + id + '.json' , body);
  }

  deleteComanda(id: string){
    return this.http.delete(url + 'comanda/' + id + ".json");
  }

  getAllComande(){
    return this.http.get<Comanda[]>(url + 'comanda.json')
  }

  getComandeByTavolo(idTavolo: any){
    return null
  }

  deleteComandeByTavolo(idTavolo: String){
    return null
  }

  //queste due non fanno direttamente chiamate

  //cambia stato di un solo elemento
  patchStatoElemento(comanda: Comanda, index: number){
    let appoggio: StatoComanda[] = comanda.statoElements;
    appoggio[index] = appoggio[index]+1;

    let body = {
      menuElements: comanda.menuElements,
      statoElements: appoggio,
      tavolo: comanda.tavolo,
      tipo: comanda.tipo
    }

    return this.modificaComanda(comanda.id, body);
  }

  //prende tutti gli elementi allo stato da cambiare e lo incrementa
  patchStatoComanda(comanda: Comanda, stato: StatoComanda){
    let appoggio: StatoComanda[] = [];
    for(let i=0; i<comanda.statoElements.length; i++){
      appoggio[i] = (comanda.statoElements[i] == stato) ? stato+1 : comanda.statoElements[i];
    }

    let body = {
      menuElements: comanda.menuElements,
      statoElements: appoggio,
      tavolo: comanda.tavolo,
      tipo: comanda.tipo
    }

    return this.modificaComanda(comanda.id, body);
  }

}
