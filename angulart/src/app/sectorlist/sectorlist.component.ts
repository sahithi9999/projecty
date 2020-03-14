import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service';
import { Sector } from '../sector';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sectorlist',
  templateUrl: './sectorlist.component.html',
  styleUrls: ['./sectorlist.component.css']
})
export class SectorlistComponent implements OnInit {

  constructor(private router:Router,private sectorservice:SectorService) { }  
  isupdated: boolean;
sectorlist: Observable<Sector[]>;
 ngOnInit() {
  this.sectorservice.getAllSectors().subscribe(data => {
   this.sectorlist = data;
  })
 }

 deleteSectors(sectors:Sector)
 {
  this.sectorservice.deleteSectors(sectors.id).subscribe(data=>{
  this.sectorservice.getAllSectors().subscribe(data=>{this.sectorlist=data;});
 });
 }
 updateSectors(sectors : Sector ) {
  window.localStorage.removeItem("edit-id");
   window.localStorage.setItem("edit-id", sectors.id.toString());
    this.router.navigate(['addsector']);
  }

}

