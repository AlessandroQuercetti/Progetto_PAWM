import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utente } from '../models/utente.model';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

const key = "AIzaSyDpsNgVSbPeTc08gxwMywnv2gHOxSajcHc"
const register_url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + key
const login_url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + key

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  currentUser!: Utente | null;

  constructor(
    private fireauth: AngularFireAuth,
    private http: HttpClient,
    private router: Router) {}

    /*
  registrazione2(email: string, password: string ){
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert("registrazione a buon fine")
      //this.router.navigate(['/login'])
    }, err=> {
      this.router.navigate(['/registrazione'])
    })
  }

  login2(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email, password).then( (data:any) => {
      console.log(data)
      this.isLoggedIn = true
      localStorage.setItem("token", 'true');
      this.router.navigate([''])
    }, err=> {
      alert("errore")
      this.router.navigate(['/login'])
    })
  }

    logout2(){
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token')
      this.isLoggedIn = false;
    }, err => {
      alert("errore")
    })
  }
*/
  salvaCurrentUser(id: string, email: string, token: string, expirationDate: Date){
    this.currentUser = new Utente(email, id, token, expirationDate)
    this.isLoggedIn = true;
    localStorage.setItem('utente', JSON.stringify(this.currentUser));
  }



  registrazione(email: string, password: string ){
    //todo aggiungi anche utenteConInfo
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
