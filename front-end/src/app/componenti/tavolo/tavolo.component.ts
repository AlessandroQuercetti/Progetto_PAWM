import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Comanda } from 'src/app/interfacce/comanda';
import { ComandeService } from 'src/app/services/comande.service';
import { ComandaDialogComponent } from '../comanda-dialog/comanda-dialog.component';
import { Tavolo } from 'src/app/interfacce/tavolo';
import { TavoliService } from 'src/app/services/tavoli.service';
import { MenuElement } from 'src/app/interfacce/menuElement';
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

    this.comandeService.getComandeByTavolo(this.idTavolo).subscribe(
      (data: any) =>{
        if(data != undefined && data != null){
          this.comande = Object.keys(data)
            .map((key) => {
              data[key]['id'] = key;
              data[key]['stato'] = StatoComanda[data[key]['stato']]
              return data[key];
            })
            .filter((item) => item.tavolo.numeroTavolo == this.tavolo.numeroTavolo);
        }
      }
    );
  }

  openComandaDialog(idTavolo: any){
    const dialogRef = this.dialog.open( ComandaDialogComponent, {
      data: {idTavolo: idTavolo, tavolo: this.tavolo}
    })
    dialogRef.afterClosed().subscribe(
      data => window.location.reload()
    );
  }

  eliminaComanda(idComanda: any){
    this.comandeService.deleteComanda(idComanda).subscribe(data => window.location.reload())
  }

  changeStatoComanda(comanda: Comanda, stato: any, reload: boolean){
    this.comandeService.patchComanda(comanda.id!, {stato: stato}).subscribe(
      data => {
        if(reload) window.location.reload()
      });
  }

  cliccato(){
    alert("cliccato")
  }

  calcolaConto(){
    let conto: number = 0;
    for(let comanda of this.comande){
      for(let elemento of comanda.menuElements!){
        conto = conto + Number(elemento.prezzo);
      }
      this.changeStatoComanda(comanda, 2, false);
    }
    alert("il conto è " + conto + " euro");
  }

}
