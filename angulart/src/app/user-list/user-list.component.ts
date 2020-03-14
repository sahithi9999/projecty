import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  constructor(private router:Router,private userservice:UserService) { }  
  isupdated: boolean;
userlist: Observable<User[]>;
 ngOnInit() {
   
  this.userservice.getAllUser().subscribe(data => {
   this.userlist = data;
  })
 }
 deleteUser(user:User)
 {
  this.userservice.deleteUser(user.id)
    this.userservice.getAllUser().subscribe(
      data=>{this.userlist=data;
      });
 
 }
 updateUser(user : User ) {
 window.localStorage.removeItem("edit-id");
  window.localStorage.setItem("edit-id", user.id.toString());
   this.router.navigate(['signup']);
 }
}







  
  