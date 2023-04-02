import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comanda } from '../interfacce/comanda';
import { MenuElement } from '../interfacce/menuElement';
import { AuthService } from './auth.service';

const API = "https://restaurantdb-812bc-default-rtdb.europe-west1.firebasedatabase.app/"

@Injectable({
  providedIn: 'root'
})
export class ComandeService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getToken(){
    return JSON.parse(this.authService.getCurrentUser()!).token
  }

  getAllComande(){
    let token_part = "?auth=" + this.getToken();
    return this.http.get<Comanda[]>(API + 'comande.json' + token_part);
  }

  getComandeByTavolo(id: any){
    return this.http.get<Comanda[]>(API + 'comande.json?tavolo=' + id);
  }

  addComanda(idTavolo: any, menuElements: MenuElement[]){
    console.log("da fare")
  }



}
