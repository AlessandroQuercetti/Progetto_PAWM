import { Component } from '@angular/core';

@Component({
  selector: 'app-sezione-tavoli',
  templateUrl: './sezione-tavoli.component.html',
  styleUrls: ['./sezione-tavoli.component.css']
})
export class SezioneTavoliComponent {

  tavoli = [
    { id: 0, numero: 1, persone: 4},
    { id: 1, numero: 2, persone: 3},
    { id: 2, numero: 3, persone: 6},
    { id: 3, numero: 4, persone: 2},
    { id: 4, numero: 5, persone: 5},
    { id: 5, numero: 6, persone: 4},
  ]

  addTavolo(){
    console.log("addTavolo")
  }

  addComanda(id:any){
    console.log("crea comanda tavolo", id)
  }

}
