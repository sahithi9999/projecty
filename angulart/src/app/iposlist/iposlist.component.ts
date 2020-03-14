import { Component, OnInit } from '@angular/core';
import { IposService } from '../ipos.service';

import { Ipos } from '../ipos';

import { FormGroup, FormControl } from '@angular/forms';

import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iposlist',
  templateUrl: './iposlist.component.html',
  styleUrls: ['./iposlist.component.css']
})
export class IposlistComponent implements OnInit {

  constructor(private router:Router,private iposservice:IposService) { }

 isupdated: boolean;

iposlist: Observable<Ipos[]>;

 ngOnInit() {

 this.iposservice.getAllIpos().subscribe(data => {

  this.iposlist = data;

 })

 }
 deleteIpos(ipos:Ipos)
 {
  this.iposservice.deleteIpos(ipos.id).subscribe(data=>{
  this.iposservice.getAllIpos().subscribe(data=>{this.iposlist=data;});
 });
 }
 updateIpos(ipos : Ipos ) {
  window.localStorage.removeItem("edit-id");
   window.localStorage.setItem("edit-id", ipos.id.toString());
    this.router.navigate(['addipo']);
  }

}
