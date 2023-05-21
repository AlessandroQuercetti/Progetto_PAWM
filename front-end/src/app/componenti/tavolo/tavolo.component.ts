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

    this.tavoliService.getTavolo(this.idTavolo).subscribe( (data: any) => {
      this.tavolo = data;
    })

    //questo poi sarà più corto ovviamente
    this.comandeService.getComandeByTavolo(this.idTavolo).subscribe(
      (data: Comanda[]) =>{
        this.comande = data
      }
    );

  }

  openComandaDialog(idTavolo: string){
    const dialogRef = this.dialog.open( ComandaDialogComponent, {
      data: {idTavolo: idTavolo, tavolo: this.tavolo}
    })

    dialogRef.afterClosed().subscribe(
      data => window.location.reload()
    );
  }

  eliminaComanda(idComanda: string){
    this.comandeService.deleteComanda(idComanda).subscribe()
    window.location.reload()
  }

  changeStatoComanda(comanda: Comanda, stato: StatoComanda){
    this.comandeService.patchStatoComanda(comanda, stato).subscribe(data => window.location.reload());
  }

  changeStatoElemento(comanda:Comanda, index: number){
    this.comandeService.patchStatoElemento(comanda, index).subscribe();
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
