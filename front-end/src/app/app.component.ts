import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'front-end';
  isLoggedIn = true;

  ngOnInit(): void {
    console.log("vedi la faccenda dei token"); //TODO vedi token
  }

  onClickLogout(){
    this.isLoggedIn = false;
  }
}
