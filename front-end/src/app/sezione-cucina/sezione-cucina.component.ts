import { Component } from '@angular/core';

@Component({
  selector: 'app-sezione-cucina',
  templateUrl: './sezione-cucina.component.html',
  styleUrls: ['./sezione-cucina.component.css']
})
export class SezioneCucinaComponent {

  comande = [
    {id: 0, tavolo: 1, stato: "new", elementi: ["piatto1", "piatto2", "piatto3"]},
    {id: 1, tavolo: 2, stato: "done", elementi: ["piatto1", "piatto2", "piatto3"]},
    {id: 2, tavolo: 3, stato: "new", elementi: ["piatto1", "piatto2", "piatto3"]},
    {id: 3, tavolo: 4, stato: "done", elementi: ["piatto1", "piatto2", "piatto3"]},
    {id: 4, tavolo: 5, stato: "new", elementi: ["piatto1", "piatto2", "piatto3"]},
    {id: 5, tavolo: 1, stato: "new", elementi: ["piatto1", "piatto2", "piatto3"]},
  ]

  getComande(){
    return this.comande;
  }
}
