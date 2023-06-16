import { Component } from '@angular/core';
import { MenuElement } from 'src/app/interfacce/menuElement';
import { MenuElementsService } from 'src/app/services/menu-elements.service';
import { Categoria } from 'src/app/interfacce/Categoria';
import { MatDialog } from '@angular/material/dialog';
import { MenuElementDialogComponent } from '../menu-element-dialog/menu-element-dialog.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuElements!: MenuElement[];
  categorie: any[] = Object.values(Categoria).filter(value => isNaN(Number(value)))

  constructor(private menuElementsService: MenuElementsService, public dialog: MatDialog) {}

  ngOnInit(): any{

    this.menuElementsService.getMenuElements().subscribe( (data: any) => {
      this.menuElements = Object.keys(data).map( (key) => {
        data[key]['id'] = key;
        return data[key]
      })
    })
  }

  openElementDialog(tipoOperazione: number, menuElement: MenuElement|void){
    const dialogRef = this.dialog.open( MenuElementDialogComponent, {
      data: { tipoOperazione: tipoOperazione, menuElement: menuElement }
    })

    dialogRef.afterClosed().subscribe();
  }

  deleteMenuElement(id: any){
    this.menuElementsService.deleteMenuElement(id).subscribe(
      data => window.location.reload()
    );
  }

}
