import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  /*
  closeDialog(){
    console.log(this.form)
    this.ref.close("closing from function");
  }*/

  onSubmit(form: NgForm){
      this.addTable(form.value);
  }

  //aggiungi tavolo
  addTable(table: any){
    this.tavoliService.addTavolo(
      {numeroTavolo: table.numeroTavolo, numeroPersone: table.numeroPersone }
    ).subscribe(data => {
      console.log(data)
    })

  }

}
