import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  showFiller = false;
  showSezioneTavoli = false;
  showSezioneCucina = false;

  onClickButSezTavoli(){
    this.showSezioneTavoli = !this.showSezioneTavoli;
    this.showSezioneCucina = false;
  }

  onClickButSezCucina() {
    this.showSezioneCucina = !this.showSezioneCucina;
    this.showSezioneTavoli = false;
  }
}
