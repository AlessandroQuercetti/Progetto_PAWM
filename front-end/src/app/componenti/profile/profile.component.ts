import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  currentUser!: any; //currentUser!: Utente;

  constructor(private authService: AuthService) {}

  ngOnInit(): any{
    this.currentUser = JSON.parse(this.authService.getCurrentUser()!)
  }

}
