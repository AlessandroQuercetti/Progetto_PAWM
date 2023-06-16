import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tavolo } from 'src/app/models/tavolo';
import { TavoliService } from 'src/app/services/tavoli.service';

export interface DialogData {
  numeroTavolo: number;
  numeroPersone: number;
}

@Component({
  selector: 'app-add-table-dialog',
  templateUrl: './add-table-dialog.component.html',
  styleUrls: ['./add-table-dialog.component.css']
})
export class AddTableDialogComponent implements OnInit{

  form: DialogData = {
    numeroTavolo: 0,
    numeroPersone: 0
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<AddTableDialogComponent>,
    private tavoliService: TavoliService) {}

  result: any;

  ngOnInit(): void{
    console.log("open add table dialog")
  }

  onSubmit(form: NgForm){
    let t: Tavolo =  {
      numeroTavolo: form.value.numeroTavolo,
      numeroPersone: form.value.numeroPersone
    }

    this.tavoliService.addTavolo(t).subscribe(
      data => {
        alert("tavolo aggiunto")
        window.location.reload()
      },
      err => alert("errore con l'aggiunta del tavolo")
    );
  }

}
