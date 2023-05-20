import { Component, OnInit } from '@angular/core';
import { StatoComanda } from 'src/app/interfacce/StatoComanda';
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
        data[key]['stato'] = StatoComanda[data[key]['stato']];
        return data[key];
      })
      .filter(comanda => (comanda.tipo == "BAR" && this.checkStatoElements(comanda)));
    })

    setTimeout(function() {
      window.location.reload()
    }, 30000);
  }

  checkStatoElements(comanda: Comanda){
    for(let s of comanda.statoElements)
      if(s == 0) return true;

    return false;
  }

  changeStatoComanda(comanda: Comanda){
    this.comandeService.patchStatoComanda(comanda, StatoComanda.ORDINATO).subscribe(data => window.location.reload());
  }

  changeStatoElemento(comanda: Comanda, index: number){
    this.comandeService.patchStatoElemento(comanda, index).subscribe(data => window.location.reload());

  }

  eliminaComanda(idComanda: string){
    this.comandeService.deleteComanda(idComanda).subscribe(data => window.location.reload())
  }

}
