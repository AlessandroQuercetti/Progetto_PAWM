import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtenteService } from './utente.service';
import { Utente } from '../models/utente.model';

const key = "AIzaSyDpsNgVSbPeTc08gxwMywnv2gHOxSajcHc"
const url = "https://restaurantdb-aeb27-default-rtdb.europe-west1.firebasedatabase.app/"
const register_url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + key
const login_url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + key

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  currentUser!: Utente | null;

  constructor(private utenteService: UtenteService, private http: HttpClient) {}

  registrazione(email: string, password: string ){
    return this.http.post(register_url, {email: email, password: password, returnSecureToken: true});
  }

  login(email: string, password: string){
    return this.http.post(login_url, {email: email, password: password, returnSecureToken: true});
  }

  salvaCurrentUser(id: string, email: string, token: string, expirationDate: Date){
    this.currentUser = new Utente(email, id, token, expirationDate)
    this.isLoggedIn = true;
    localStorage.setItem('utente', JSON.stringify(this.currentUser));

    this.utenteService.getUtenti().subscribe((data:any) => {
      Object.keys(data).map((key) => {
        data[key]['id'] = key;
        if(data[key].email == email){
          localStorage.setItem('utenteConInfo', JSON.stringify(data[key]));
        }
        return data[key]
      })
    })
  }

  logout(){
    localStorage.removeItem('utente');
    this.isLoggedIn = false;
    this.currentUser = null;
  }

}
