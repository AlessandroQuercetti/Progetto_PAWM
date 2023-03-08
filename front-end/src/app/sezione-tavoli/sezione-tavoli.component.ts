import { Component } from '@angular/core';
import { TavoliService } from '../services/tavoli.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTableDialogComponent } from '../add-table-dialog/add-table-dialog.component';


@Component({
  selector: 'app-sezione-tavoli',
  templateUrl: './sezione-tavoli.component.html',
  styleUrls: ['./sezione-tavoli.component.css']
})
export class SezioneTavoliComponent {

  vistaTavolo = false;

  numeroTavolo: number = 0;
  numeroPersone: number = 0;

  constructor(private tavoliService: TavoliService, public dialog: MatDialog) {}

  getTavoli(){
    let idRistorante = 1;
    return this.tavoliService.getTavoliByRistorante(idRistorante);
  }

  removeTavolo(id: number){
    this.tavoliService.removeTavolo();
  }

  getComandaByTavolo(id: number){
    this.vistaTavolo = true;
    let idTavolo = 1;
    this.tavoliService.getComandaByTavolo(idTavolo);
  }

  openDialogAddTavolo(): void {
    const dialogRef = this.dialog.open(AddTableDialogComponent, {
      //data: { descrizione: "apertura dialog per aggiungere tavolo"}
    })

    dialogRef.afterClosed().subscribe(result => {
      //this.numeroTavolo = result.numeroTavolo;
      //this.numeroPersone = result.persone;
      console.log(result)
      console.log(result.numeroTavolo)
      console.log(result.numeroPersone)
    });

    this.tavoliService.addTavolo();
  }
}

