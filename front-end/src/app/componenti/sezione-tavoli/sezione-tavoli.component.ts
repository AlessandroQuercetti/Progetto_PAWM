import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTableDialogComponent } from '../add-table-dialog/add-table-dialog.component';
import { TavoliService } from 'src/app/services/tavoli.service';
import { Tavolo } from 'src/app/interfacce/tavolo';

@Component({
  selector: 'app-sezione-tavoli',
  templateUrl: './sezione-tavoli.component.html',
  styleUrls: ['./sezione-tavoli.component.css']
})
export class SezioneTavoliComponent implements OnInit {

  tavoli!: Tavolo[];

  constructor(private tavoliService: TavoliService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.tavoliService.getTavoli().subscribe((data: any) => {
      this.tavoli = Object.keys(data).map((key) => {
        data[key]['id'] = key;
        return data[key];
      });
    })
  }

  openDialogAddTavolo(): void {
    const dialogRef = this.dialog.open(AddTableDialogComponent, {})

    dialogRef.afterClosed().subscribe(result => {
      console.log("result dopo chiusura dialog ", result)
    });
  }

  eliminaTavolo(idTavolo: any){
    this.tavoliService.deleteTavolo(idTavolo).subscribe(
      data => console.log(data),
      err => alert(err.error.error.message)
    );
  }

}



