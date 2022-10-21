import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CompanyComponent } from './company/company.component';
import { PopupComponent } from './popup/popup.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular13_crud17';

  constructor(private dialog : MatDialog){

  }

  openDialog() {
    this.dialog.open(PopupComponent, {
      width:'30%'
      
    });
  }

  
}
