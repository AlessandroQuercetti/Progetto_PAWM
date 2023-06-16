import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tavolo } from '../interfacce/tavolo';
import { AuthService } from './auth.service';

const url = "https://restaurantdb-aeb27-default-rtdb.europe-west1.firebasedatabase.app/"

@Injectable({
  providedIn: 'root'
})
export class TavoliService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  getTavoli(){
    return this.http.get<Tavolo[]>(url + 'tavolo.json');
  }

  addTavolo(tavolo: Tavolo){
    return this.http.post(url + 'tavolo.json', tavolo);
  }

  deleteTavolo(idTavolo: string){
    return this.http.delete(url + 'tavolo/' + idTavolo + ".json");
  }

  getTavolo(id: string){
    return this.http.get<Tavolo>(url + 'tavolo/' + id + ".json");
  }

  modificaTavolo(tavolo: Tavolo){
    return this.http.patch(url + 'tavolo/' + tavolo.id + ".json", tavolo);
  }

}
