import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = "https://restaurantdb-812bc-default-rtdb.europe-west1.firebasedatabase.app/"

@Injectable({
  providedIn: 'root'
})
export class TavoliService {

  constructor(private http: HttpClient) {}

  getTavoliByRistorante(idRis: number){
    //console.log("get tavoli by ristorante da fare")
    return this.http.get(API + 'tavoli.json'); //TODO poi fai query giusta
  }

  addTavolo(body: {}){
    //console.log(body);
    return this.http.post(API + 'tavoli.json', body);
  }

  deleteTavolo(idTavolo: string){
    return this.http.delete(API + 'tavoli/' + idTavolo + '.json');
    //return this.http.delete(`${API}/tables/${idTavolo}.json`); //sintassi diversa con gli apici strani
  }

  getComandeByTavolo(idTavolo: number){
    console.log("getComandeByTavolo da fare")
    //return this.http.get(API + 'comande/' + idTavolo + '.json');
  }

  getAllComande(){
    return this.http.get(API + 'comande.json');
  }
}
