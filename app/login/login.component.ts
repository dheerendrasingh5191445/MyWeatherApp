import { Component, OnInit } from '@angular/core';
import{LoginService}from'../login.service';
import{Router}from'@angular/router';
import{Login} from '../loginmodel';

import { MyLoginService }      from '../mylogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string;
password:string;
verify:any={};
myobject:Login;
  constructor(private loginservice:LoginService,private router:Router,private loginstatus:MyLoginService) { }

  ngOnInit() {
  }

  loginfunction(){
     console.log(this.email,this.password);
        this.myobject=new Login(null,null,null,this.email,this.password,null);
      console.log("calling login........");
      this.loginservice.login(this.myobject).subscribe(data=>{this.verify=data;console.log(data);
          if(this.verify  ==  null){
            console.log("not verified");
            window.alert("invalid email id or password... try again...!!!!");
          }
          else{
            this.loginstatus.setmylogin(false);
            console.log("verified");
            this.router.navigate(['/parent-control']);
          }
        });
        this.loginservice.login(this.myobject).subscribe(data=>console.log(data));
  }

}
