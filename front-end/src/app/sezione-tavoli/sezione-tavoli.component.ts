import { Component } from '@angular/core';
import { TavoliService } from '../services/tavoli.service';

@Component({
  selector: 'app-sezione-tavoli',
  templateUrl: './sezione-tavoli.component.html',
  styleUrls: ['./sezione-tavoli.component.css']
})
export class SezioneTavoliComponent {

  vistaTavolo = false;

  constructor(private tavoliService: TavoliService) {}

  getTavoli(){
    let idRistorante = 1;
    return this.tavoliService.getTavoliByRistorante(idRistorante);
  }

  addTavolo(){
    this.tavoliService.addTavolo();
  }

  removeTavolo(id: number){
    this.tavoliService.removeTavolo();
  }

  getComandaByTavolo(id: number){
    this.vistaTavolo = true;
    let idTavolo = 1;
    this.tavoliService.getComandaByTavolo(idTavolo);
  }



}
