import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuElementService } from 'src/app/services/menu-element.service';
import { MenuElementDialogComponent } from '../menu-element-dialog/menu-element-dialog.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  menuElements: any;

  constructor(private menuElementService: MenuElementService, public dialog: MatDialog) {}

  ngOnInit(): any{
    this.menuElementService.getMenuElements().subscribe( (data: any) => {
      this.menuElements = Object.keys(data).map( (key) => {
        data[key]['idElement'] = key;
        return data[key]
      })
    })
  }

  openDialogMenuElement(tipoOperazione: number, idElement: string|void ){

    const dialogRef = this.dialog.open( MenuElementDialogComponent, {
      data: { tipoOperazione: tipoOperazione, idElement: idElement }
    })

    dialogRef.afterClosed().subscribe( result => {} );
  }

  //restituisce tutti gli elementi del menu
  getMenuElements(){
    return this.menuElements;
  }

  //elimina elemento del menu
  deleteMenuElement(id: any){
    this.menuElementService.deleteMenuElement(id).subscribe(data => {
      console.log(data);
    });
  }


}
