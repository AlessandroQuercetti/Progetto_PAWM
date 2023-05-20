import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, ChildrenOutletContexts, Router } from '@angular/router';
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
  idElement!: string |null;

  form: DialogData = {
    nome: "",
    descrizione: "",
    categoria: Categoria.ALTRO,
    prezzo: 0
  };

  constructor( private route: ActivatedRoute, private menuElementsService: MenuElementsService,
    private router: Router) {}

  ngOnInit(): void{
    this.idElement = this.route.snapshot.paramMap.get('id');
    //alert("prendi anche l'elemento")
    if(this.idElement == null)
      this.tipoOperazione = 0;
    else
      this.tipoOperazione = 1;
  }

  onSubmit(form: NgForm){
    console.log(form)
    if(this.tipoOperazione == 0)
      this.addMenuElement(form.value);
    else
      this.modifyMenuElement(this.idElement, form.value);
  }

  //aggiunge elemento del menu
  addMenuElement(body: {}){
    this.menuElementsService.addMenuElement(body).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['menu'])
  }

  //modifica elemento del menu
  modifyMenuElement(id: any, body: {}){
    this.menuElementsService.patchMenuElement(id, body).subscribe(data => {
      console.log(data);
    });

    this.router.navigate(['menu'])
  }


}
