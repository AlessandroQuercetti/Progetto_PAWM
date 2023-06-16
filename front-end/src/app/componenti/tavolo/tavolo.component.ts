import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Comanda } from 'src/app/interfacce/comanda';
import { ComandeService } from 'src/app/services/comande.service';
import { ComandaDialogComponent } from '../comanda-dialog/comanda-dialog.component';
import { Tavolo } from 'src/app/interfacce/tavolo';
import { TavoliService } from 'src/app/services/tavoli.service';
import { StatoComanda } from 'src/app/interfacce/StatoComanda';

@Component({
  selector: 'app-tavolo',
  templateUrl: './tavolo.component.html',
  styleUrls: ['./tavolo.component.css']
})
export class TavoloComponent implements OnInit {

  idTavolo!: any;
  tavolo!: Tavolo;
  comande!: Comanda[];

  constructor( private route: ActivatedRoute, private comandeService: ComandeService,
    public dialog: MatDialog, private tavoliService: TavoliService) {}

  ngOnInit(): any{

    this.idTavolo = this.route.snapshot.paramMap.get('id');

    this.tavoliService.getTavolo(this.idTavolo).subscribe( (data: Tavolo) => {
      this.tavolo = data;
    })

    this.getComande()
  }

  getComande(){
    this.comandeService.getAllComande().subscribe( (data: any) => {
      this.comande = Object.keys(data).map( (key) => {
        console.log(data[key].tavolo.numeroTavolo)
        data[key]['id'] = key;
        data[key]['stato'] = StatoComanda[data[key]['stato']];
        return data[key];
      }).filter(
        comanda => comanda.tavolo.numeroTavolo == this.tavolo.numeroTavolo
      )
    })
    return this.comande
  }

  openComandaDialog(idTavolo: string){
    const dialogRef = this.dialog.open( ComandaDialogComponent, {
      data: {idTavolo: idTavolo, tavolo: this.tavolo}
    })

    dialogRef.afterClosed().subscribe(
      //data => window.location.reload()
    );
  }

  eliminaComanda(idComanda: string){
    this.comandeService.deleteComanda(idComanda).subscribe(
      data => window.location.reload()
    )
  }

  changeStatoComanda(comanda: Comanda, stato: StatoComanda){
    this.comandeService.patchStatoComanda(comanda, stato).subscribe(
      data => window.location.reload()
    );
  }

  changeStatoElemento(comanda:Comanda, index: number){
    this.comandeService.patchStatoElemento(comanda, index).subscribe(
      //data => window.location.reload()
    );
  }

  convertStato(s: number){
    return StatoComanda[s];
  }

  calcolaConto(){
    let conto: number = 0;
    for(let comanda of this.comande){
      for(let elemento of comanda.menuElements!){
        conto = conto + Number(elemento.prezzo);
      }
      this.changeStatoComanda(comanda, 1);
    }

    alert("il conto è " + conto + " euro");
  }

}
