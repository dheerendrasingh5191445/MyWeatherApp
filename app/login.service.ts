import { Injectable } from '@angular/core';
import { Login } from './loginmodel';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
private FavUrl = 'http://localhost:49379/api/Login';  // URL to web api
private headers = new Headers({'Content-Type': 'application/json'});
constructor(private http: Http) { }
 
signup(Login:Login){
    return this.http.post(this.FavUrl,Login,{headers: this.headers}).map(res=>res.json());
    }

login(Login:Login):Observable<Response>{
	console.log("service: i recieved the obj"+Login.email);
	return this.http
      .post(this.FavUrl+"/login",Login,{headers: this.headers})
      .map(res =>res.json());

}


  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}



}