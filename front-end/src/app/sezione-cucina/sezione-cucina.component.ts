import { Component } from '@angular/core';
import { TavoliService } from '../services/tavoli.service';

@Component({
  selector: 'app-sezione-cucina',
  templateUrl: './sezione-cucina.component.html',
  styleUrls: ['./sezione-cucina.component.css']
})
export class SezioneCucinaComponent {

  constructor(private tavoliService: TavoliService) {}

  getComande(){
    return this.tavoliService.getAllComande(); //ovviamente filtra per quelle "da fare"
  }
}
