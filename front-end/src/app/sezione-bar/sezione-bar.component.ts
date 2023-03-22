import { Component } from '@angular/core';
import { TavoliService } from '../services/tavoli.service';

@Component({
  selector: 'app-sezione-bar',
  templateUrl: './sezione-bar.component.html',
  styleUrls: ['./sezione-bar.component.css']
})
export class SezioneBarComponent {

  constructor(private tavoliService: TavoliService) {}

  getComande(){
    return this.tavoliService.getAllComande(); //ovviamente filtra per quelle "solo cose bar"
  }

}
