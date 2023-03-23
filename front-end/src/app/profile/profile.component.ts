import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMenuElementDialogComponent } from '../add-menu-element-dialog/add-menu-element-dialog.component';
import { MenuElementService } from '../services/menu-element.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  menuElements: any;

  constructor(private menuElementService: MenuElementService, public dialog: MatDialog) {}

  ngOnInit(): any{
    console.log("profilo component con tutti gli elementi del menu")
    this.menuElementService.getMenuElements().subscribe( (data: any) => {
      this.menuElements = Object.keys(data).map( (key) => {
        data[key]['idElement'] = key;
        return data[key]
      })
    })
  }

  openDialogAddMenuElement(){
    const dialogRef = this.dialog.open(AddMenuElementDialogComponent, {})

    dialogRef.afterClosed().subscribe(result => {
      if(result.nome != undefined && result.descrizione != undefined && result.prezzo != undefined){
        this.addMenuElement(result);
      }
    });
  }

  getMenuElements(){
    return this.menuElements;
  }

  addMenuElement(menuElement: any){

    this.menuElementService.addMenuElement(
      {nome: menuElement.nome, descrizione: menuElement.descrizione, prezzo: menuElement.prezzo }
    ).subscribe(data => {
      console.log(data)
    })
  }
}
