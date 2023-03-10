import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TavoliService {

  tavoli = [
    { id: 0, numero: 1, persone: 4, idRistorante: 1},
    { id: 1, numero: 2, persone: 3, idRistorante: 2},
    { id: 2, numero: 3, persone: 6, idRistorante: 2},
    { id: 3, numero: 4, persone: 2, idRistorante: 1},
    { id: 4, numero: 5, persone: 5, idRistorante: 0},
    { id: 5, numero: 6, persone: 4, idRistorante: 0},
  ]

  comande = [
    {id: 0, idTavolo: 1, idElementi: [2, 3, 4]},
  ]

  constructor() { }

  getTavoliByRistorante(idRis: number){
    //console.log("get tavoli by ristorante da fare")
    return this.tavoli; //TODO poi fai query giusta
  }

  addTavolo(){
    console.log("add tavolo da fare")
  }

  removeTavolo(){
    console.log("remove tavolo da fare")
  }

  getComandaByTavolo(idTavolo: number){
    console.log("get comanda by tavolo da fare")
  }
}
