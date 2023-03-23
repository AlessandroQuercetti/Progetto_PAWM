import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TavoliService } from '../services/tavoli.service';

@Component({
  selector: 'app-sezione-cucina',
  templateUrl: './sezione-cucina.component.html',
  styleUrls: ['./sezione-cucina.component.css']
})
export class SezioneCucinaComponent implements OnInit, OnDestroy{

  comande: any;
  //sottoscrizione: any;

  constructor(private tavoliService: TavoliService) {}

  ngOnInit(): void {
    this.tavoliService.getAllComande().subscribe(data => {
      this.comande = data;
    })

    //in questo punto le comande devi farle attraverso una sottoscrizione ad un observable
    //il cambiamento dovrebbe essere lanciato ogni volta che viene aggiunta una comanda
    //però forse è piu semplice rifare la richiesta delle comande ogni tot tempo, vedere bene

    /*
    this.sottoscrizione = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
     }).subscribe((numero) => {
      console.log(numero);
     });*/
  }

  ngOnDestroy(): void {
    //this.sottoscrizione.unsubscribe()
  }

  getComande(){
    return this.comande; //ovviamente filtra per quelle "da fare"
  }
}
