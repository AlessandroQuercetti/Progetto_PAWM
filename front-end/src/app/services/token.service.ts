import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  //TODO vedi tutto
  tokens = []

  constructor() { }

  createToken(){
    console.log("create token da fare");
  }

  getToken(){
    console.log("get token da fare");
  }
}
