import { Component } from '@angular/core';

export interface DialogData {
  numeroTavolo: number;
  persone: number;
}

@Component({
  selector: 'app-add-table-dialog',
  templateUrl: './add-table-dialog.component.html',
  styleUrls: ['./add-table-dialog.component.css']
})
export class AddTableDialogComponent {

}
