import { Component, OnInit } from '@angular/core';
import  {StockexchangeService } from '../stockexchange.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Stockexchange } from '../stockexchange'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageexchange',
  templateUrl: './manageexchange.component.html',
  styleUrls: ['./manageexchange.component.css']
})
export class ManageexchangeComponent implements OnInit {

  constructor(private router:Router,private stockexchangeservice:StockexchangeService) { } 
  
 stockexchange : Stockexchange=new Stockexchange();  
  submitted = false;  
  
  ngOnInit() {  
    var mid = window.localStorage.getItem("edit-id");
    if (mid != null && mid != "") {
   this.stockexchangeservice.findOneInAll4(parseInt(mid))
    .subscribe(data => {
     this.stockexchange = data; this.stockexchangesaveform.setValue(this.stockexchange)
  });
  }
    this.submitted = false;
 }  
  
  stockexchangesaveform=new FormGroup({  
    id:new FormControl('' , [Validators.required , Validators.minLength(2) ] ),
    brief:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
  contactAdress:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    remarks:new FormControl('' , [Validators.required , Validators.minLength(5) ] ), 
    stockExchange:new FormControl('',[Validators.required,Validators.email]),  
    
  });  
  
  saveStockexchange(saveStockexchange){  
    this.stockexchange=new Stockexchange();     
    this.stockexchange.id=this.Id.value;
    this.stockexchange.brief=this.Brief.value;
    this.stockexchange.contactAdress=this.ContactAdress.value; 
    this.stockexchange.remarks=this.Remarks.value; 
    this.stockexchange.stockExchange=this.StockExchange.value;  
    
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.stockexchangeservice.saveStockexchange(this.stockexchange)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.stockexchange = new Stockexchange();  
    window.localStorage.removeItem("edit-id");
    this.router.navigate(['home'])
  }  
  get Id(){  
    return this.stockexchangesaveform.get('id');  
  }  
  
  get Brief(){  
    return this.stockexchangesaveform.get('brief');  
  }  
  get ContactAdress(){  
    return this.stockexchangesaveform.get('contactAdress');  
  }  
  get Remarks(){  
    return this.stockexchangesaveform.get('remarks');  
  }  
  
  get StockExchange(){  
    return this.stockexchangesaveform.get('stockExchange');  
  }  
  
  
  saveStockexchangeForm(){  
    this.submitted=false;  
    this.stockexchangesaveform.reset();  
  }  

}

