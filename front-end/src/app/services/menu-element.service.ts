import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = "https://restaurantdb-812bc-default-rtdb.europe-west1.firebasedatabase.app/"

@Injectable({
  providedIn: 'root'
})
export class MenuElementService {

  idRestaurant: any = null; //da prendere assolutamente

  constructor(private http: HttpClient) {}

  getMenuElements(){
    return this.http.get(API + "menuElements.json"); //TODO poi fai giusta
  }

  addMenuElement(body: {}){
    return this.http.post(API + 'menuElements.json', body);
  }

  /*
  getElement(id: number){ //non so se serve
    return this.menuElements[id]; //TODO vedi bene questo perchè deve prendere la persona giusta
  }

  getElementsPerCategoria(){
    return this.menuElements; //TODO divisi per categorie
  }*/
}
