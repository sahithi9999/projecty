import { Component, OnInit } from '@angular/core';
import { CompanydataService } from '../companydata.service';
import { Companydata } from '../companydata';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';


@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {
  deleteMessage: boolean;

  constructor(private router:Router,private companydataservice:CompanydataService) { }  
 
companylist: Observable<Companydata[]>;
 ngOnInit() {
  this.companydataservice.getAllCompanydata().subscribe(data => {
   this.companylist = data;
  })
  
}
deleteCompanydata(companydata:Companydata)
 {
  this.companydataservice.deleteCompanydata(companydata.companyName).subscribe(data=>{
  this.companydataservice.getAllCompanydata().subscribe(data=>{this.companylist=data;});
 });
 }
 updateCompanydata(companydata : Companydata ) {
  window.localStorage.removeItem("edit-companyName");
   window.localStorage.setItem("edit-companyName", companydata.companyName.toString());
    this.router.navigate(['company']);
  }
}
