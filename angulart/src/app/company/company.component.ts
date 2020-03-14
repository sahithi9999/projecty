import { Component, OnInit } from '@angular/core';  
import  {CompanydataService } from '../companydata.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Companydata } from '../companydata';  
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {


  constructor(private companydataservice:CompanydataService,private router:Router) { } 
  
  companydata : Companydata=new Companydata();  
  submitted = false;  
  
  ngOnInit() {  
    var companyName = window.localStorage.getItem("edit-companyName");
    if (companyName != null && companyName != "") {
   this.companydataservice.findOneInAll1(companyName)
    .subscribe(data => {
     this.companydata = data; this.companydatasaveform.setValue(this.companydata)
  });
  }
    this.submitted = false;
 }  
  
   
  
  companydatasaveform=new FormGroup({  
    companyName:new FormControl('' , [Validators.required , Validators.minLength(2) ] ),
    boardofDirectors:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    briefWriteup:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    listInStock:new FormControl('' , [Validators.required , Validators.minLength(5) ] ), 
    stockCode:new FormControl('',[Validators.required,Validators.email]),  
    turnOver:new FormControl('' , [Validators.required , Validators.minLength(10),Validators.maxLength(10)] ),
    ceo:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    sector:new FormControl('' , [Validators.required , Validators.minLength(5) ] )
  });  
  
  saveCompanydata(saveCompanydata){  
    this.companydata=new Companydata();     
    this.companydata.companyName=this.CompanyName.value;
    this.companydata.boardofDirectors=this.BoardofDirectors.value;
    this.companydata.briefWriteup=this.BriefWriteup.value; 
    this.companydata.listInStock=this.ListInStock.value; 
    this.companydata.stockCode=this.StockCode.value;  
    this.companydata.turnOver=this.TurnOver.value; 
    this.companydata.ceo=this.Ceo.value;
    this.companydata.sector=this.Sector.value; 
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.companydataservice.saveCompanydata(this.companydata)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.companydata = new Companydata();  
    window.localStorage.removeItem("edit-companyName");
    this.router.navigate(['home'])
  }  
  get CompanyName(){  
    return this.companydatasaveform.get('companyName');  
  }  
  
  get BoardofDirectors(){  
    return this.companydatasaveform.get('boardofDirectors');  
  }  
  get BriefWriteup(){  
    return this.companydatasaveform.get('briefWriteup');  
  }  
  get ListInStock(){  
    return this.companydatasaveform.get('listInStock');  
  }  
  
  get StockCode(){  
    return this.companydatasaveform.get('stockCode');  
  }  
  get TurnOver(){  
    return this.companydatasaveform.get('turnOver');  
  }  
  get Ceo(){  
    return this.companydatasaveform.get('ceo');  
  }  
  get Sector(){  
    return this.companydatasaveform.get('sector');  
  }  
  
  saveCompanydataForm(){  
    this.submitted=false;  
    this.companydatasaveform.reset();  
  }  

}
