import { Component, OnInit } from '@angular/core';
import { TavoliService } from '../services/tavoli.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTableDialogComponent } from '../add-table-dialog/add-table-dialog.component';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private tavoliService: TavoliService, public dialog: MatDialog, private route: ActivatedRoute) {}

  ngOnInit(): void {

    let idRistorante = 1; //questo è da prendere in qualche variabile di sessione
    let idTavolo = this.route.snapshot.paramMap.get('id');

    if(idTavolo){
      this.vistaTavolo = true;
      console.log(idTavolo)
      this.comande = this.tavoliService.getComandeByTavolo(parseInt(idTavolo)); //.subscribe
    }else{
      this.vistaTavolo = false;
      this.tavoliService.getTavoliByRistorante(idRistorante).subscribe((data: any) => {
        //cose in piu fatte per il funzionamento di firebase, creo array senza gli id dati da firebase
        this.tavoli = Object.keys(data).map((key) => {
          data[key]['idTavolo'] = key;
          return data[key]
        });
      })
    }

  }

  openDialogAddTavolo(): void {
    const dialogRef = this.dialog.open(AddTableDialogComponent, {})

    dialogRef.afterClosed().subscribe(result => {
      if(result.numeroTavolo != undefined && result.numeroPersone != undefined){
        this.addTavolo(result);
      }
    });
  }

  getTavoli(){
    return this.tavoli;
  }

  addTavolo(tavolo: any){
    this.tavoliService.addTavolo(
      {numeroTavolo: tavolo.numeroTavolo, numeroPersone: tavolo.numeroPersone}
      ).subscribe(data => {
        console.log(data)
      })
  }

  eliminaTavolo(idTavolo: any){
    console.log("elimina tavolo, ", idTavolo);
    this.tavoliService.deleteTavolo( idTavolo
      ).subscribe(data => {
      console.log(data);
    })
  }

  getComandeByTavolo(id: number){
    return this.comande;
  }

  addComanda(){
    console.log("addComanda da fare");
  }

}



