import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Comanda } from 'src/app/interfacce/comanda';
import { ComandeService } from 'src/app/services/comande.service';
import { ComandaDialogComponent } from '../comanda-dialog/comanda-dialog.component';

@Component({
  selector: 'app-tavolo',
  templateUrl: './tavolo.component.html',
  styleUrls: ['./tavolo.component.css']
})
export class TavoloComponent implements OnInit {

  idTavolo!: any;
  comande!: Comanda[];

  constructor(private route: ActivatedRoute, private comandeService: ComandeService, public dialog: MatDialog) {}

  ngOnInit(): any{

    this.idTavolo = this.route.snapshot.paramMap.get('id');

    this.comandeService.getComandeByTavolo(this.idTavolo).subscribe(
      (data: any) =>{
        if(data != undefined || data != null){
          this.comande = Object.keys(data).map((key) => {
            data[key]['id'] = key;
            return data[key];
          });
        }
      },
      (err: any) => {
        console.log(err.error.error.message)
      }
    );
  }


  openComandaDialog(idTavolo: any){
    const dialogRef = this.dialog.open( ComandaDialogComponent, {
      data: {idTavolo: idTavolo}
    })

    dialogRef.afterClosed().subscribe();
  }
}
