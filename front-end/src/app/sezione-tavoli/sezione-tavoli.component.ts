import { Component, OnInit } from '@angular/core';
import { TavoliService } from '../services/tavoli.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTableDialogComponent } from '../add-table-dialog/add-table-dialog.component';
import { ActivatedRoute } from '@angular/router';

import { table } from '../interfaces/table'; //vedi se riesci

@Component({
  selector: 'app-sezione-tavoli',
  templateUrl: './sezione-tavoli.component.html',
  styleUrls: ['./sezione-tavoli.component.css']
})
export class SezioneTavoliComponent implements OnInit {

  vistaTavolo = false;
  tavoli: any;
  comande: any;

  //tavoloDaAggiungere: table;

  numeroTavolo: number = 0;
  numeroPersone: number = 0;

  constructor(private tavoliService: TavoliService, public dialog: MatDialog, private route: ActivatedRoute) {}

  ngOnInit(): void {

    let idRistorante = 1; //questo è da prendere in qualche variabile di sessione
    let idTavolo = this.route.snapshot.paramMap.get('id');

    if(idTavolo){
      this.vistaTavolo = true;
      this.comande = this.tavoliService.getComandeByTavolo(parseInt(idTavolo));
      console.log("vistaTavolo, indice: ", this.route.snapshot.paramMap.get('id'));

    }else{
      this.vistaTavolo = false;
      this.tavoli = this.tavoliService.getTavoliByRistorante(idRistorante);
      console.log("vistaGenerale, indice: ", this.route.snapshot.paramMap.get('id'));
    }

  }

  getTavoli(){
    return this.tavoli;
  }

  removeTavolo(id: number){
    this.tavoliService.removeTavolo();
  }

  getComandeByTavolo(id: number){
    return this.comande;
  }

  openDialogAddTavolo(): void {
    const dialogRef = this.dialog.open(AddTableDialogComponent, {
      //data: { descrizione: "apertura dialog per aggiungere tavolo"}
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result.numeroTavolo != undefined && result.numeroPersone != undefined){
        console.log(result)
        console.log(result.numeroTavolo)
        console.log(result.numeroPersone)
        //this.numeroTavolo = result.numeroTavolo;
        //this.numeroPersone = result.persone;
      }else{
        console.log("dialog chiuso per annullamento")
      }
    });

    this.tavoliService.addTavolo();
  }
}

