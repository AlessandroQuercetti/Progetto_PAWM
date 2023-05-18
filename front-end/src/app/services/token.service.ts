import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  createToken(){
    console.log("create token da fare");
  }

  getToken(){
    console.log("get token da fare");
  }

  deleteToken(){
    console.log("delete token da fare");
  }
}
