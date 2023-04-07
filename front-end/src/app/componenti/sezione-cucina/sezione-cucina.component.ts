import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StatoComanda } from 'src/app/interfacce/StatoComanda';
import { Comanda } from 'src/app/interfacce/comanda';
import { ComandeService } from 'src/app/services/comande.service';
import { TavoliService } from 'src/app/services/tavoli.service';

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
      //poi puoi metterlo direttamente nella query
      .filter(comanda => {
        comanda.stato == "ORDINATO" && comanda.tipo == "CUCINA"}
        );
    })

     // imposto un refresh di pagina dopo 30 secondi
    setTimeout(function() {
      window.location.reload()
    }, 30000);
  }

  eliminaComanda(idComanda: any){
    this.comandeService.deleteComanda(idComanda).subscribe(data => {
      console.log(data)
      window.location.reload()
    })
  }

  changeStatoComanda(comanda: Comanda, stato: any){
    stato = StatoComanda[stato];
    this.comandeService.patchComanda(comanda.id!, {stato: stato}).subscribe(
      data => {
        console.log(data)
        window.location.reload()
      });
  }

}
