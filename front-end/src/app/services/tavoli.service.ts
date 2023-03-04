import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TavoliService {

  tavoli = [
    { id: 0, numero: 1, persone: 4},
    { id: 1, numero: 2, persone: 3},
    { id: 2, numero: 3, persone: 6},
    { id: 3, numero: 4, persone: 2},
    { id: 4, numero: 5, persone: 5},
    { id: 5, numero: 6, persone: 4},
  ]

  constructor() { }

  getTavoli(){
    return this.tavoli
  }

  addTavolo(){
    console.log("add tavolo da fare")
  }

  removeTavolo(){
    console.log("remove tavolo da fare")
  }

  getComandaByTavolo(){
    console.log("get comanda by tavolo da fare")
  }
}
