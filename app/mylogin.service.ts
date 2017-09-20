import { Injectable } from '@angular/core';
import { Login } from './loginmodel';
import { Headers, Http } from '@angular/http';



@Injectable()
export class MyLoginService {
favourite:boolean=false;
login:boolean;
private headers = new Headers({'Content-Type': 'application/json'});
constructor(private http: Http) { }

setmyfavourite(favouriteobject:any)
{
    if(favouriteobject == true){
        this.favourite=false;
    }else{
        this.favourite=true;
     }

}
getmyfavourite(){return this.favourite}
setmylogin(loginobj:boolean){
    if(loginobj == true){
        this.login=false;
    }else{
        this.login=true;
     }
}
getmylogin(){return this.login;}

}
