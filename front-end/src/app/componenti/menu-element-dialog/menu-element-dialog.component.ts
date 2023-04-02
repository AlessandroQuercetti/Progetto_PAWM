import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuElementsService } from 'src/app/services/menu-elements.service';

export interface DialogData {
  nome: string;
  descrizione: string;
  prezzo: number;
}

@Component({
  selector: 'app-menu-element-dialog',
  templateUrl: './menu-element-dialog.component.html',
  styleUrls: ['./menu-element-dialog.component.css']
})
export class MenuElementDialogComponent {

  tipoOperazione!: number;
  idElement!: string;
  result: any;

  form: DialogData = {
    nome: "",
    descrizione: "",
    prezzo: 0
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<MenuElementDialogComponent>,
    private menuElementsService: MenuElementsService) {}


  ngOnInit(): void{
    this.tipoOperazione = this.data.tipoOperazione;
    this.idElement = this.data.idElement;
  }

  /*
  closeDialog(){
    console.log(this.form)
    this.ref.close("closing from function");
  }*/

  onSubmit(form: NgForm){
    if(this.tipoOperazione == 0)
      this.addMenuElement(form.value);
    else //if(tipoOperazione == 1)
      this.modifyMenuElement(this.idElement, form.value);
  }


  //aggiunge elemento del menu
  addMenuElement(body: {}){
    this.menuElementsService.addMenuElement(body).subscribe(data => {
      console.log(data)
    })
  }

  //modifica elemento del menu
  modifyMenuElement(id: any, body: {}){
    this.menuElementsService.patchMenuElement(id, body).subscribe(data => {
      console.log(data);
    });
  }

}
