import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tavolo } from '../interfacce/tavolo';
import { AuthService } from './auth.service';

const url = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class TavoliService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  getTavoli(){
    return this.http.get<Tavolo[]>(url + 'tavolo/all');
  }

  addTavolo(tavolo: Tavolo){
    return this.http.post(url + 'tavolo', tavolo);
  }

  deleteTavolo(idTavolo: string){
    return this.http.delete(url + 'tavolo/' + idTavolo);
  }

  getTavolo(idTavolo: string){
    return this.http.get<Tavolo>(url + 'tavolo/' + idTavolo);
  }

  modificaTavolo(tavolo: Tavolo){
    return this.http.put(url + 'tavolo', tavolo);
  }

}
