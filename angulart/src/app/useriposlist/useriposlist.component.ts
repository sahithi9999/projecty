import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IposService } from '../ipos.service';
import { Observable } from 'rxjs';
import { Ipos } from '../ipos';

@Component({
  selector: 'app-useriposlist',
  templateUrl: './useriposlist.component.html',
  styleUrls: ['./useriposlist.component.css']
})
export class UseriposlistComponent implements OnInit {

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
