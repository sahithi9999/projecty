import { Component, OnInit } from '@angular/core';
import  {StockpriceService } from '../stockprice.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Stockprice } from '../stockprice';  
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addstockprice',
  templateUrl: './addstockprice.component.html',
  styleUrls: ['./addstockprice.component.css']
})
export class AddstockpriceComponent implements OnInit {

  constructor(private stockpriceservice:StockpriceService,private router:Router) { } 
  
stockprice: Stockprice=new Stockprice();  
  submitted = false;  
  
  ngOnInit() {  
    var sid = window.localStorage.getItem("edit-sid");
    if (sid != null && sid != "") {
   this.stockpriceservice.findOneInAll5(parseInt(sid))
    .subscribe(data => {
     this.stockprice = data; this.stockpricesaveform.setValue(this.stockprice)
  });
  }
    this.submitted = false;
 }  
  
   
  
  stockpricesaveform=new FormGroup({  
   companyCode:new FormControl('' , [Validators.required , Validators.minLength(2) ] ),
   currentPrice:new FormControl('' , [Validators.required , Validators.minLength(2) ] ),
   sid:new FormControl('' , [Validators.required , Validators.minLength(2) ] ),
   date:new FormControl(), 
   time:new FormControl(), 
   uploadfile:new FormControl(),
   stockExchange:new FormControl('' , [Validators.required , Validators.minLength(2) ] ) 
   
  });  
  
  saveStockprice(saveStockprice){  
    this.stockprice=new Stockprice();     
    this.stockprice.companyCode=this.CompanyCode.value;
    this.stockprice.currentPrice=this.CurrentPrice.value;
    this.stockprice.sid=this.Sid.value; 
    this.stockprice.date=this.Date.value; 
    
    this.stockprice.time=this.Time.value; 
    this.stockprice.uploadfile=this.Uploadfile.value;

    this.stockprice.stockExchange=this.StockExchange.value; 
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.stockpriceservice.saveStockprice(this.stockprice)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.stockprice = new Stockprice();  
    window.localStorage.removeItem("edit-sid");
    this.router.navigate(['home'])
  }  
  get CompanyCode(){  
    return this.stockpricesaveform.get('companyCode');  
  }  
  
  get CurrentPrice(){  
    return this.stockpricesaveform.get('currentPrice');  
  }  
  get Sid(){  
    return this.stockpricesaveform.get('sid');  
  }  
  get Date(){  
    return this.stockpricesaveform.get('date');  
  } 
  get Time(){  
    return this.stockpricesaveform.get('time');  
  } 
  get Uploadfile(){  
    return this.stockpricesaveform.get('uploadfile');  
  } 
  get StockExchange(){  
    return this.stockpricesaveform.get('stockExchange');  
  }  
  saveStockpriceForm(){  
    this.submitted=false;  
    this.stockpricesaveform.reset();  
  }  
}