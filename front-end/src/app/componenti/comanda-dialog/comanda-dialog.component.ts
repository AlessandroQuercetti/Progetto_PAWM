import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categoria } from 'src/app/interfacce/Categoria';
import { MenuElement } from 'src/app/interfacce/menuElement';
import { Tavolo } from 'src/app/interfacce/tavolo';
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
  tavolo!: Tavolo;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private comandeService: ComandeService,
    private menuElementService: MenuElementsService) {}

  ngOnInit(): void{
    //this.tipoOperazione = this.data.tipoOperazione;
    this.idTavolo = this.data.idTavolo;
    this.tavolo = this.data.tavolo;

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

  rimuoviElemento(indice: number){
    alert("rimuovi elemento alla pos "+ indice + " da fare");
    //this.elementiDaAggiungere.
  }

  creaComanda(){
    let perCucina = this.elementiDaAggiungere.filter(elemento => elemento.categoria != Categoria.BEVANDE)
    let perBar = this.elementiDaAggiungere.filter(elemento => elemento.categoria == Categoria.BEVANDE)

    this.comandeService.addComanda(this.tavolo, perCucina, "CUCINA").subscribe( data => {
    });

    this.comandeService.addComanda(this.tavolo, perBar, "BAR").subscribe( data => {
      alert("comanda aggiunta");
    });
  }

}
