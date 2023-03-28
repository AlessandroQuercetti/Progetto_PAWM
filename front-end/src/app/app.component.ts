import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'front-end';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    //vedi faccenda token
    if(this.authService.getCurrentUser()){
      this.authService.isLoggedIn = true;
    }
  }
}
