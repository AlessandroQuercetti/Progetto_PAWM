import { Component, OnInit } from '@angular/core';
import { StatoComanda } from 'src/app/models/StatoComanda';
import { Comanda } from 'src/app/models/comanda';
import { ComandeService } from 'src/app/services/comande.service';

@Component({
  selector: 'app-sezione-cucina',
  templateUrl: './sezione-cucina.component.html',
  styleUrls: ['./sezione-cucina.component.css']
})
export class SezioneCucinaComponent implements OnInit{

  comande!: Comanda[];

  constructor(private comandeService: ComandeService) {}

  ngOnInit(): void {

    //filtra solo se le comande sono da fare, quelle consegnate e pagate no
    this.comandeService.getAllComande().subscribe((data: any) => {

      this.comande = Object.keys(data).map( (key) => {
        data[key]['id'] = key;
        data[key]['stato'] = StatoComanda[data[key]['stato']];
        return data[key];
      })
      .filter(
        comanda => comanda.tipo == 'CUCINA' && this.checkStatoElements(comanda)
      );
    })

     // imposto un refresh di pagina dopo 30 secondi
    setTimeout(function() {
      window.location.reload()
    }, 30000);
  }

  checkStatoElements(comanda: Comanda){
    for(let s of comanda.statoElements)
      if(s == 0) return true;
    return false;
  }

  changeStatoElemento(comanda: Comanda, index: number){
    this.comandeService.patchStatoElemento(comanda, index).subscribe(
      data => window.location.reload()
    );
  }

  eliminaComanda(idComanda: any){
    this.comandeService.deleteComanda(idComanda).subscribe(
      data => window.location.reload()
    );
  }

  changeStatoComanda(comanda: Comanda){
    this.comandeService.patchStatoComanda(comanda, StatoComanda.ORDINATO).subscribe(
      data => window.location.reload()
    );
  }

}
