import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categoria } from 'src/app/interfacce/Categoria';
import { MenuElement } from 'src/app/interfacce/menuElement';
import { Tavolo } from 'src/app/interfacce/tavolo';
import { ComandeService } from 'src/app/services/comande.service';
import { MenuElementsService } from 'src/app/services/menu-elements.service';
import { MenuElementDialogComponent } from '../menu-element-dialog/menu-element-dialog.component';

@Component({
  selector: 'app-comanda-dialog',
  templateUrl: './comanda-dialog.component.html',
  styleUrls: ['./comanda-dialog.component.css']
})
export class ComandaDialogComponent {

  categorie: any[] = Object.values(Categoria).filter(value => isNaN(Number(value)))
  elementiDaAggiungere: MenuElement[] = [];
  menuElements!: MenuElement[];

  idTavolo!: string;
  tavolo!: Tavolo;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private comandeService: ComandeService,
    private menuElementService: MenuElementsService) {}

  ngOnInit(): void{
    this.idTavolo = this.data.idTavolo;
    this.tavolo = this.data.tavolo;

    this.menuElementService.getMenuElements().subscribe(data => {
      this.menuElements = data.sort(this.sortfunct)
    })

    this.menuElementService.getMenuElements().subscribe((data: any) => {
      this.menuElements = Object.keys(data).map( (key) => {
        data[key]['id'] = key;
        return data[key]
      }).sort(this.sortfunct)
    });
  }

  sortfunct(item1:any, item2:any){
    if(item1.categoria > item2.categoria){
      return 1
    }
    if(item1.categoria < item2.categoria){
      return -1
    }
    return 0
  }

  addElement(menuElement: MenuElement){
    this.elementiDaAggiungere.push(menuElement);
    this.elementiDaAggiungere = this.elementiDaAggiungere.sort()
  }

  rimuoviElemento(indice: number){
    delete this.elementiDaAggiungere[indice];
    this.elementiDaAggiungere = this.elementiDaAggiungere.filter(item => item != undefined);
  }

  creaComanda(){
    let perCucina = this.elementiDaAggiungere.filter(elemento => elemento.categoria != Categoria.BEVANDE)
    let perBar = this.elementiDaAggiungere.filter(elemento => elemento.categoria == Categoria.BEVANDE)
    let ok = 0;

    if(perCucina.length != 0)
      this.comandeService.addComanda(this.tavolo, perCucina, "CUCINA").subscribe();

    if(perBar.length != 0)
      this.comandeService.addComanda(this.tavolo, perBar, "BAR").subscribe();
  }

}
