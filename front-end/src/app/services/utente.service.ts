import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtenteConInfo } from '../interfacce/utenteConInfo';

const url = "https://restaurantdb-aeb27-default-rtdb.europe-west1.firebasedatabase.app/"

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor(private http: HttpClient) { }


  modificaUtente(u: UtenteConInfo){
    return this.http.patch(url + 'utente/' + u.id + '.json', u);
  }

  deleteUtente(id: string){
    return this.http.delete(url + 'utente/' + id + ".json");
  }

  getUtente(id: string){
    return this.http.get<UtenteConInfo>(url + 'utente/' + id + ".json");
  }

  getUtenti(){
    return this.http.get<UtenteConInfo[]>(url + 'utente.json');
  }

  getUtenteByToken(token: String){
    return null
  }

}
