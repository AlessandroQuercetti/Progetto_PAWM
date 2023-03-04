import { Component } from '@angular/core';
import { TavoliService } from '../services/tavoli.service';

@Component({
  selector: 'app-sezione-tavoli',
  templateUrl: './sezione-tavoli.component.html',
  styleUrls: ['./sezione-tavoli.component.css']
})
export class SezioneTavoliComponent {

  constructor(private tavoliService: TavoliService) {}

  getTavoli(){
    return this.tavoliService.getTavoli();
  }

  addTavolo(){
    this.tavoliService.addTavolo();
  }

  removeTavolo(id: number){
    this.tavoliService.removeTavolo();
  }

  getComandaByTavolo(id: number){
    this.tavoliService.getComandaByTavolo();
  }



}
