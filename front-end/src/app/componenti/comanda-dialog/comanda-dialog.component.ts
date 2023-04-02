import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuElement } from 'src/app/interfacce/menuElement';
import { ComandeService } from 'src/app/services/comande.service';
import { MenuElementsService } from 'src/app/services/menu-elements.service';

@Component({
  selector: 'app-comanda-dialog',
  templateUrl: './comanda-dialog.component.html',
  styleUrls: ['./comanda-dialog.component.css']
})
export class ComandaDialogComponent {

  //tipoOperazione!: number;
  elementiDaAggiungere: MenuElement[] = [];
  menuElements!: MenuElement[];
  idTavolo!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private comandeService: ComandeService,
    private menuElementService: MenuElementsService) {}

  ngOnInit(): void{
    //this.tipoOperazione = this.data.tipoOperazione;
    this.idTavolo = this.data.idTavolo;
    this.menuElementService.getMenuElements().subscribe((data: any) => {
      this.menuElements = Object.keys(data).map( (key) => {
        data[key]['id'] = key;
        return data[key]
      })
    });
  }


  addElement(menuElement: MenuElement){
    this.elementiDaAggiungere.push(menuElement);
  }

  onSubmit(){
    this.comandeService.addComanda(this.idTavolo, this.elementiDaAggiungere) //subscribe
  }
}
