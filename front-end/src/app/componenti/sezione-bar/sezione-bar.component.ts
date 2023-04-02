import { Component, OnInit } from '@angular/core';
import { Comanda } from 'src/app/interfacce/comanda';
import { ComandeService } from 'src/app/services/comande.service';

@Component({
  selector: 'app-sezione-bar',
  templateUrl: './sezione-bar.component.html',
  styleUrls: ['./sezione-bar.component.css']
})
export class SezioneBarComponent implements OnInit{

  comande!: Comanda[];

  constructor(private comandeService: ComandeService) {}

  ngOnInit(){
    this.comandeService.getAllComande().subscribe((data: any) => {
      this.comande = Object.keys(data).map( (key) => {
        data[key]['id'] = key;
        return data[key];
      });
    })
  }

}
