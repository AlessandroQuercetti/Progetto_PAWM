import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuElement } from '../interfacce/menuElement';
import { AuthService } from './auth.service';

const API = "https://restaurantdb-812bc-default-rtdb.europe-west1.firebasedatabase.app/"

@Injectable({
  providedIn: 'root'
})
export class MenuElementsService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  getTokenPart(){ //ricordati di rimettere questo per autenticare le chiamate
    return "?auth=" + JSON.parse(this.authService.getCurrentUser()!).token;
  }

  getMenuElements(){
    //const configs = { 'token': this.getToken() }; oppure fai con il configs
    return this.http.get<MenuElement[]>(API + "menuElements.json");
  }

  addMenuElement(body: {}){
    return this.http.post(API + 'menuElements.json', body);
  }

  patchMenuElement(id: string, body: {}){
    return this.http.patch(API + 'menuElements/' + id + '.json', body);
  }

  deleteMenuElement(id: string){
    return this.http.delete(API + 'menuElements/' + id + '.json');
  }
}
