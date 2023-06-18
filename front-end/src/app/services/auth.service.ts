import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utente } from '../models/utente.model';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

const url = "https://restaurantdb-aeb27-default-rtdb.europe-west1.firebasedatabase.app/"
const key = "AIzaSyDpsNgVSbPeTc08gxwMywnv2gHOxSajcHc"
const register_url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + key
const login_url =    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + key

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  currentUser!: Utente | null;
  isProprietario: boolean = false;
  requestIsRegister = false;

  constructor(
    private fireauth: AngularFireAuth,
    private http: HttpClient,
    private router: Router) {}

  salvaCurrentUser(id: string, email: string, token: string, expirationDate: Date){
    this.currentUser = new Utente(email, id, token, expirationDate)
    this.isLoggedIn = true;
    localStorage.setItem('utente', JSON.stringify(this.currentUser));
    this.verificaIsProprietario();
  }

  verificaIsProprietario(){
    this.http.get(url + "admins.json").subscribe( data => {
      if(data != null && data != undefined){
        console.log("è proprietario")
        this.isProprietario = true;
      }
    }, err => {
      console.log("non è proprietario")
    })
  }

  registrazione(email: string, password: string ){
    this.requestIsRegister = true;
    return this.http.post(register_url, {email: email, password: password, returnSecureToken: true});
  }

  login(email: string, password: string){
    return this.http.post(login_url, {email: email, password: password, returnSecureToken: true});
  }

  logout(){
    localStorage.removeItem('utente');
    this.isLoggedIn = false;
    this.currentUser = null;
  }

}
