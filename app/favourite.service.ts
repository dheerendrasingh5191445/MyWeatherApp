import { Injectable } from '@angular/core';
import { Favourite } from './Favourite';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class FavouriteService {
private FavUrl = 'http://localhost:49379/api/values';  // URL to web api
private headers = new Headers({'Content-Type': 'application/json'});
constructor(private http: Http) { }
 
create(Favourite:Favourite){
	console.log(Favourite.CityId);
      return this.http
        .post(this.FavUrl,Favourite,{headers: this.headers})
        .toPromise()
        .catch(this.handleError);
    }

getFavData(){
console.log("getting my favourite list");
return this.http
             .get(this.FavUrl)
             .map((response)=>response.json());
             
}

update(obj:any,comment:string){
  let id=obj.id;
  obj.comment=comment;
	console.log("service: i recieved the obj"+obj.comment+id);
	this.http
			.put(this.FavUrl+'/'+id,obj,{headers: this.headers}).subscribe();


}

delete(id:number){
	console.log(id);
	this.http
	     .delete(this.FavUrl+'/'+id,{headers:this.headers}).subscribe();
	     console.log("deleted my favourite");
}


  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}