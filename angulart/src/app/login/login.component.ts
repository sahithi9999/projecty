import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userNew:User=new User();
  constructor(private router: Router, private userservice:UserService) { }
  user: User = new User();

 submitted = false;

  ngOnInit() {
    this.submitted = false;

 }

 usersaveform = new FormGroup({

  

  userName: new FormControl('', [Validators.required, Validators.minLength(5)]),

  password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),

  
 })

 saveUser(saveuser) {

  this.user = new User();

  this.user.userName = this.usersaveform.get('userName').value;

  this.user.password = this.usersaveform.get('password').value;

  
  this.submitted = true;

  this.userservice.findByUserNameAndPassword(this.user.userName, this.user.password).subscribe(data =>{

  this.userNew=data;

  if(this.userNew!=null && this.userNew.usertype=='Admin'){

   this.router.navigate(['/adminlanding']);

  }

  else if(this.userNew!=null && this.userNew.usertype=='user'){

   this.router.navigate(['/userlanding']);

  }
  else{
  alert("invalid Details");
}
 },

   error => console.log(console.error()));


 }



}