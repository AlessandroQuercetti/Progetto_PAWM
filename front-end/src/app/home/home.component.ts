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

  onClickBtnSez(type:number){

    switch(type){

      case 0:
        this.showSezioneTavoli = !this.showSezioneTavoli;
        this.showSezioneCucina = false;
        break;

      case 1:
        this.showSezioneCucina = !this.showSezioneCucina;
        this.showSezioneTavoli = false;
        break;

      default:
        this.showSezioneTavoli = false;
        this.showSezioneCucina = false;
    }


  }

}
