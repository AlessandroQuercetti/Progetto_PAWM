import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuElement } from '../interfacce/menuElement';
import { AuthService } from './auth.service';

const url="http://localhost/8080"

@Injectable({
  providedIn: 'root'
})
export class MenuElementsService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  getMenuElements(){
    return this.http.get<MenuElement[]>(url + "menuElement/all");
  }

  addMenuElement(e: MenuElement){
    return this.http.post(url + "menuElement", e);
  }

  patchMenuElement(e: MenuElement){
    return this.http.put(url + 'menuElement', e);
  }

  deleteMenuElement(id: string){
    return this.http.delete(url + 'menuElement/' + id);
  }
}
