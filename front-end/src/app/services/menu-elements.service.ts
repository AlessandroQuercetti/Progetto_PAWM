import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuElement } from '../interfacce/menuElement';
import { AuthService } from './auth.service';

const url = "https://restaurantdb-aeb27-default-rtdb.europe-west1.firebasedatabase.app/"

@Injectable({
  providedIn: 'root'
})
export class MenuElementsService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  getMenuElements(){
    return this.http.get<MenuElement[]>(url + "menuElement.json");
  }

  addMenuElement(e: MenuElement){
    return this.http.post(url + "menuElement.json", e);
  }

  patchMenuElement(id: string, body: {}){
    return this.http.patch(url + 'menuElement/' + id +".json", body);
  }

  deleteMenuElement(id: string){
    return this.http.delete(url + 'menuElement/' + id + ".json");
  }
}
