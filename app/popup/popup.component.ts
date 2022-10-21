import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { response } from 'express';
import { ApiService } from '../shared/api.service';
import * as alertify from 'alertifyjs'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  editdata: any;

  constructor(private builder: FormBuilder, private dialog: MatDialogRef<PopupComponent>, private api: ApiService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null) {
      this.api.GetCompanybycode(this.data.id).subscribe((response:any) => {
        this.editdata = response;
        this.companyform.setValue({ id: this.editdata.id, name: this.editdata.name, empcount: this.editdata.empcount, revenue: this.editdata.revenue, address: this.editdata.address, isactive: this.editdata.isactive });
      });

    }
  }

  companyform = this.builder.group({
    id: ['',Validators.required],
    name: ['',Validators.required],
    empcount: ['',Validators.required],
    revenue: ['',Validators.required],
    address: ['',Validators.required],
    isactive: ['',Validators.required],

  });
  SaveCompany() {
    console.log("click")
    if (this.companyform.valid) {
       const Editid = this.companyform.getRawValue().id;
       if (Editid != '' && Editid != null) {
         this.api.UpdateCompany(Editid, this.companyform.getRawValue()).subscribe(response => {
           this.closepopup();
           alertify.success("Updated Successfully.")
         });

       } else {
         this.api.CreateCompany(this.companyform.value).subscribe(response => {
           this.closepopup();
           alertify.success("Saved Successfully.")
        });

       }
     }
  }
   closepopup() {
     this.dialog.close();
   }

  //  handleClickSave() {
  // }
}


