import { Component, OnInit } from '@angular/core';
import { StockexchangeService } from '../stockexchange.service';

import { Observable } from 'rxjs';

import { Stockexchange } from '../stockexchange';
import { Router } from '@angular/router';



@Component({
  selector: 'app-stockexchangelist',
  templateUrl: './stockexchangelist.component.html',
  styleUrls: ['./stockexchangelist.component.css']
})
export class StockexchangelistComponent implements OnInit {
  constructor(private router:Router,private stockexchangeservice:StockexchangeService) { }  
  isupdated: boolean;
stockexchangelist: Observable<Stockexchange[]>;
 ngOnInit() {
  this.stockexchangeservice.getAllStockexchange().subscribe(data => {
   this.stockexchangelist = data;
  })
}
deleteStockexchange(stockexchange:Stockexchange)
 {
  this.stockexchangeservice.deleteStockexchange(stockexchange.id).subscribe(data=>{
  this.stockexchangeservice.getAllStockexchange().subscribe(data=>{this.stockexchangelist=data;});
 });
 }
 updateStockexchange(stockexchange : Stockexchange ) {
  window.localStorage.removeItem("edit-id");
   window.localStorage.setItem("edit-id", stockexchange.id.toString());
    this.router.navigate(['manageexchange']);
  }
}