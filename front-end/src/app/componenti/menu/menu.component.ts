import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuElement } from 'src/app/interfacce/menuElement';
import { MenuElementsService } from 'src/app/services/menu-elements.service';
import { MenuElementDialogComponent } from '../menu-element-dialog/menu-element-dialog.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuElements!: MenuElement[];

  constructor(private menuElementsService: MenuElementsService, public dialog: MatDialog) {}

  ngOnInit(): any{
    this.menuElementsService.getMenuElements().subscribe( (data: any) => {
      this.menuElements = Object.keys(data).map( (key) => {
        data[key]['id'] = key;
        return data[key]
      })
    });
  }

  openDialogMenuElement(tipoOperazione: number, idElement: string|void ){

    const dialogRef = this.dialog.open( MenuElementDialogComponent, {
      data: { tipoOperazione: tipoOperazione, idElement: idElement }
    })

    dialogRef.afterClosed().subscribe();
  }

  //elimina elemento del menu
  deleteMenuElement(id: any){
    this.menuElementsService.deleteMenuElement(id).subscribe(data => {
      console.log(data);
    });
  }


}
