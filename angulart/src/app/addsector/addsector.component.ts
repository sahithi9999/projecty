import { Component, OnInit } from '@angular/core';
import  {SectorService } from '../sector.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Sector } from '../sector';  
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addsector',
  templateUrl: './addsector.component.html',
  styleUrls: ['./addsector.component.css']
})
export class AddsectorComponent implements OnInit {

  constructor(private sectorservice:SectorService,private router:Router) { } 
  
sector: Sector=new Sector();  
  submitted = false;  
  
  ngOnInit() {  

    var sid = window.localStorage.getItem("edit-id");
    if (sid != null && sid != "") {
   this.sectorservice.findOneInAll3(parseInt(sid))
    .subscribe(data => {
     this.sector = data; this.sectorsaveform.setValue(this.sector)
  });
  }
    this.submitted = false;
 }  
  
  
  sectorsaveform=new FormGroup({  
   id:new FormControl('' , [Validators.required , Validators.minLength(2) ] ),
   brief:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
   sectorName:new FormControl('' , [Validators.required , Validators.minLength(2) ] ),  
   
  });  
  
  saveSectors(saveSectors){  
    this.sector=new Sector();     
    this.sector.id=this.Id.value;
    this.sector.brief=this.Brief.value;
    this.sector.sectorName=this.SectorName.value; 
    
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.sectorservice.saveSectors(this.sector)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.sector = new Sector();  
    window.localStorage.removeItem("edit-id");
    this.router.navigate(['home'])
  }  
  get Id(){  
    return this.sectorsaveform.get('id');  
  }  
  
  get Brief(){  
    return this.sectorsaveform.get('brief');  
  }  
  get SectorName(){  
    return this.sectorsaveform.get('sectorName');  
  }  
  
  
  
  saveSectorForm(){  
    this.submitted=false;  
    this.sectorsaveform.reset();  
  }  

}