import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'front-end';

  isLoggedIn(){
    //vedi bene questo, fai controllo
    return true;
  }

  ngOnInit(): void {
    console.log("vedi la faccenda dei token"); //TODO vedi token
  }

  //devi aggiungere un observable per vedere login e logout oppure cambia metodo

}
