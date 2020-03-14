import { Component, OnInit } from '@angular/core';
import  {IposService } from '../ipos.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Ipos } from '../ipos';  
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addipo',
  templateUrl: './addipo.component.html',
  styleUrls: ['./addipo.component.css']
})
export class AddipoComponent implements OnInit {

  constructor(private iposservice:IposService,private router:Router) { } 
  
ipos : Ipos=new Ipos();  
  submitted = false;  
  
  ngOnInit() {  
    var ipoid = window.localStorage.getItem("edit-id");
    if (ipoid != null && ipoid != "") {
   this.iposservice.findOneInAll2(parseInt(ipoid))
    .subscribe(data => {
     this.ipos = data; this.ipossaveform.setValue(this.ipos)
  });
  }
    this.submitted = false;
 }  
  
  
  ipossaveform=new FormGroup({  
   id:new FormControl('' , [Validators.required , Validators.minLength(2) ] ),
   date:new FormControl('' , [Validators.required  ] ),
   time:new FormControl('' , [Validators.required  ] ),
   remarks:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
   companyName:new FormControl('' , [Validators.required , Validators.minLength(3) ] ), 
    pricePershare:new FormControl('',[Validators.required,Validators.minLength(2)]),  
  stockExchange:new FormControl('' , [Validators.required , Validators.minLength(2)] ),
    totalNoofShares:new FormControl('' , [Validators.required , Validators.minLength(2) ] )
  });  
  
  saveIpos(saveIpos){  
    this.ipos=new Ipos();     
    this.ipos.id=this.Id.value;
    this.ipos.date=this.Date.value;
    this.ipos.time=this.Time.value;
    this.ipos.remarks=this.Remarks.value; 
    this.ipos.companyName=this.CompanyName.value; 
    this.ipos.pricePershare=this.PricePershare.value;  
    this.ipos.stockExchange=this.StockExchange.value; 
    this.ipos.totalNoofShares=this.TotalNoofShares.value;
    
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.iposservice.saveIpos(this.ipos)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.ipos = new Ipos();  
    window.localStorage.removeItem("edit-id");
    this.router.navigate(['home'])
  }  
  get Id(){  
    return this.ipossaveform.get('id');  
  }  
  
  get Date(){  
    return this.ipossaveform.get('date');  
  }
  get Time(){  
    return this.ipossaveform.get('time');  
  }  
  get Remarks(){  
    return this.ipossaveform.get('remarks');  
  }  
  get CompanyName(){  
    return this.ipossaveform.get('companyName');  
  }  
  
  get PricePershare(){  
    return this.ipossaveform.get('pricePershare');  
  }  
  get StockExchange (){  
    return this.ipossaveform.get('stockExchange');  
  }  
  get TotalNoofShares(){  
    return this.ipossaveform.get('totalNoofShares');  
  }  
  
  
  saveIposForm(){  
    this.submitted=false;  
    this.ipossaveform.reset();  
  }  

}