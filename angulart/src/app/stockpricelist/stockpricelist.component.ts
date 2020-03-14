import { Component, OnInit } from '@angular/core';
import { StockpriceService } from '../stockprice.service';
import { Stockprice } from '../stockprice';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockpricelist',
  templateUrl: './stockpricelist.component.html',
  styleUrls: ['./stockpricelist.component.css']
})
export class StockpricelistComponent implements OnInit {

  constructor(private router:Router,private stockpriceservice:StockpriceService) { }  
 
stockpricelist: Observable<any[]>;
 ngOnInit() {
  this.stockpriceservice.getAllStockprice().subscribe(data => {
   this.stockpricelist = data;
  })
}
deleteStockprice(stockprice:Stockprice)
 {
  this.stockpriceservice.deleteStockprice(stockprice.sid).subscribe(data=>{
  this.stockpriceservice.getAllStockprice().subscribe(data=>{this.stockpricelist=data;});
 });
 }
 updateStockprice(stockprice : Stockprice ) {
  window.localStorage.removeItem("edit-sid");
   window.localStorage.setItem("edit-sid", stockprice.sid.toString());
    this.router.navigate(['addstockprice']);
  }
}