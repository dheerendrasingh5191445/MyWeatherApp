import { Component, OnInit } from '@angular/core';
import {Router} from'@angular/router';

import {LoginService} from '../login.service';
import{Login} from'../loginmodel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],

})
export class SignupComponent implements OnInit {
firstname:string;
lastname:string;
mobileno:string;
email:string;
password:string;
confirmpassword:string;
  constructor(private Mylogin:LoginService,private router:Router) { }

  ngOnInit() {
  }

  signup(){
    if(this.password==this.confirmpassword){
    let mylogindata=new Login(this.firstname,this.lastname,this.mobileno,this.email,this.password,this.confirmpassword);
    console.log("signing uppppp!!!!!!");
      this.Mylogin.signup(mylogindata).subscribe(data=>{console.log("Data sent !!"+data)});
      this.router.navigate(['./login-control/login']);}
      else{window.alert("password and confirm password mismatch");}
  }

}
