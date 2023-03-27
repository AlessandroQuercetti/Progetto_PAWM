import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuElementService } from 'src/app/services/menu-element.service';

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

  tipoOperazione: number = -1;
  idElement: string = "";
  result: any;

  form: DialogData = {
    nome: "",
    descrizione: "",
    prezzo: 0
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<MenuElementDialogComponent>,
    private menuElementService: MenuElementService) {}



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
  addMenuElement(menuElement: any){
    this.menuElementService.addMenuElement(
      {nome: menuElement.nome, descrizione: menuElement.descrizione, prezzo: menuElement.prezzo }
    ).subscribe(data => {
      console.log(data)
    })
  }

  //modifica elemento del menu
  modifyMenuElement(id: any, body: {}){
    this.menuElementService.patchMenuElement(id, body).subscribe(data => {
      console.log(data);
    });
  }

}
