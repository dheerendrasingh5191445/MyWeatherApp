import { Component, OnInit } from '@angular/core';


import { WeatherService  } from '../apidata.service';
import {FavouriteService} from '../favourite.service';


import { Favourite } from '../favourite';

@Component({
  selector: 'app-favourite-control',
  templateUrl: './favourite-control.component.html',
  styleUrls: ['./favourite-control.component.css']
})
export class FavouriteControlComponent implements OnInit {
MyFav:any = Array<Favourite>();
p=1;
commentline:string;
constructor(private favService: FavouriteService) {}

ngOnInit(){
        this.favService.getFavData()
                 .subscribe(data=>{this.MyFav=data;console.log(this.MyFav)},
                   error=>console.log(error));
}

delete(id:number):void{
	console.log("going to delete");
	this.favService.delete(id);
	console.log("send it to service");
	   var ele = this.MyFav.find(f => f.id == id);
     const index = this.MyFav.indexOf(ele);
     this.MyFav.splice(index, 1);
}

comment(object:any,comment:string){
	 object.comment=this.commentline;
	 console.log("updating request....");
	   this.favService.update(object,comment);
}

}
