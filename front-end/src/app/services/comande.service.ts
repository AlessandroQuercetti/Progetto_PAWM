import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comanda } from '../interfacce/comanda';
import { MenuElement } from '../interfacce/menuElement';
import { AuthService } from './auth.service';
import { StatoComanda } from '../interfacce/StatoComanda';

const url = "http://localhost:8080/"

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
    return this.http.post(url + 'comanda', body);
  }

  modificaComanda(comanda: Comanda){
    return this.http.put(url + 'comanda' , comanda);
  }

  deleteComanda(id: string){
    return this.http.delete(url + 'comanda/' + id);
  }

  getAllComande(){
    return this.http.get<Comanda[]>(url + 'comanda/all')
  }

  getComandeByTavolo(idTavolo: any){
    return this.http.get<Comanda[]>(url + 'comanda/bytavolo/' + idTavolo);
  }

  deleteComandeByTavolo(idTavolo: String){
    return this.http.delete<Comanda[]>(url + 'comanda/bytavolo/' + idTavolo);
  }


  //queste due non fanno direttamente chiamate

  //cambia stato di un solo elemento
  patchStatoElemento(comanda: Comanda, index: number){
    let appoggio: StatoComanda[] = comanda.statoElements;
    appoggio[index] = appoggio[index]+1;
    comanda.statoElements = appoggio;
    return this.modificaComanda(comanda);
  }

  //prende tutti gli elementi allo stato da cambiare e lo incrementa
  patchStatoComanda(comanda: Comanda, stato: StatoComanda){
    let appoggio: StatoComanda[] = [];
    for(let i=0; i<comanda.statoElements.length; i++){
      appoggio[i] = (comanda.statoElements[i] == stato) ? stato+1 : comanda.statoElements[i];
    }
    comanda.statoElements = appoggio;
    return this.modificaComanda(comanda);
  }

}
