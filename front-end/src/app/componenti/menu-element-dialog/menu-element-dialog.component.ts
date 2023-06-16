import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categoria } from 'src/app/interfacce/Categoria';
import { MenuElement } from 'src/app/interfacce/menuElement';
import { MenuElementsService } from 'src/app/services/menu-elements.service';

export interface DialogData {
  nome: string;
  descrizione: string;
  categoria: Categoria;
  prezzo: number;
}

@Component({
  selector: 'app-menu-element-dialog',
  templateUrl: './menu-element-dialog.component.html',
  styleUrls: ['./menu-element-dialog.component.css']
})
export class MenuElementDialogComponent {

  categorie: any[] = Object.values(Categoria).filter(value => isNaN(Number(value)));
  tipoOperazione!: number;
  element!: MenuElement |null;

  form: DialogData = {
    nome: "",
    descrizione: "",
    categoria: Categoria.ALTRO,
    prezzo: 0
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<MenuElementDialogComponent>,
    private menuElementsService: MenuElementsService) {}

    ngOnInit(): void{
      this.tipoOperazione = this.data.tipoOperazione;
      this.element = this.data.menuElement;
    }

  onSubmit(form: NgForm){
    if(this.tipoOperazione == 0)
      this.addMenuElement(form.value);
    else
      this.modifyMenuElement(this.element?.id, form.value);
  }

  //aggiunge elemento del menu
  addMenuElement(element: MenuElement){
    console.log(element)
    this.menuElementsService.addMenuElement(element).subscribe(
      (data: any) => {
        window.location.reload();
      },
      (err: any) => {
        alert("errore nell'aggiunta dell'elemento del menu");
      }
    )
  }

  //modifica elemento del menu
  modifyMenuElement(id: any, body: {}){
    this.menuElementsService.patchMenuElement(id, body).subscribe(
      (data: any) => {
        window.location.reload();
      },
      (err: any) => {
        alert("errore nella modifica dell'elemento del menu");
      }
    );
  }


}
