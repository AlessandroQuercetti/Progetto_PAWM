import { Component } from '@angular/core';
import { MenuElement } from 'src/app/interfacce/menuElement';
import { MenuElementsService } from 'src/app/services/menu-elements.service';
import { Categoria } from 'src/app/interfacce/Categoria';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuElements!: MenuElement[];
  categorie: any[] = Object.values(Categoria).filter(value => isNaN(Number(value)))

  constructor(private menuElementsService: MenuElementsService) {}

  ngOnInit(): any{

    this.menuElementsService.getMenuElements().subscribe( (data: MenuElement[]) => {
      this.menuElements = data;
    })
  }

  deleteMenuElement(id: any){
    this.menuElementsService.deleteMenuElement(id).subscribe();
    window.location.reload()
  }

}
