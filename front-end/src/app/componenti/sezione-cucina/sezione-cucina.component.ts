import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comanda } from 'src/app/interfacce/comanda';
import { ComandeService } from 'src/app/services/comande.service';
import { TavoliService } from 'src/app/services/tavoli.service';

@Component({
  selector: 'app-sezione-cucina',
  templateUrl: './sezione-cucina.component.html',
  styleUrls: ['./sezione-cucina.component.css']
})
export class SezioneCucinaComponent implements OnInit, OnDestroy{

  comande!: Comanda[];
  //sottoscrizione: any;

  constructor(private tavoliService: TavoliService, private comandeService: ComandeService) {}

  ngOnInit(): void {
    this.comandeService.getAllComande().subscribe((data: any) => {
      this.comande = Object.keys(data).map( (key) => {
        data[key]['id'] = key;
        return data[key];
      });
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

}
