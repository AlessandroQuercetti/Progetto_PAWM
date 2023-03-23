import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  nome: string;
  descrizione: string;
  prezzo: number;
}

@Component({
  selector: 'app-add-menu-element-dialog',
  templateUrl: './add-menu-element-dialog.component.html',
  styleUrls: ['./add-menu-element-dialog.component.css']
})
export class AddMenuElementDialogComponent {


  form: DialogData = {
    nome: "",
    descrizione: "",
    prezzo: 0
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<AddMenuElementDialogComponent>) {}

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
