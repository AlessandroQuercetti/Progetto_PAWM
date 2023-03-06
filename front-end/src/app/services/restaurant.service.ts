import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurants = [
    {id: 0, nome: "tavolo matto", username: "user0", password: "pass0"},
    {id: 1, nome: "cipolla d'oro", username: "user1", password: "pass1"},
    {id: 2, nome: "fabietto", username: "user2", password: "pass2"}
  ]

  constructor() { }

  getRestaurants(){
    return this.restaurants;
  }

  getRestaurant(id: number){
    return this.restaurants[id];
  }
}
