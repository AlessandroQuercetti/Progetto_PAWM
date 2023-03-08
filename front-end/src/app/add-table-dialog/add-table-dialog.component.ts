import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    private ref: MatDialogRef<AddTableDialogComponent>) {}

  result: any;

  ngOnInit(): void{
    //console.log(this.data);
    //this.result = this.data;
    console.log("open dialog")
  }

  /*
  closeDialog(){
    console.log(this.form)
    this.ref.close("closing from function");
  }*/

}
