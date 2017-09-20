import { Component, OnInit } from '@angular/core';

import {Favourite} from'../favourite';

@Component({
  selector: 'app-parent-control',
  templateUrl: './parent-control.component.html',
  styleUrls: ['./parent-control.component.css']
})
export class ParentControlComponent implements OnInit {

weblist:Favourite[]=[];
 constructor() { }  

 ngOnInit(){

 }
	getjson(json){
		console.log("mydata "+json.city.name);
		for(let item of json.list)
		{
				let fav=new Favourite(json.city.id,json.city.name,item.dt_txt,item.main.humidity,item.main.temp,item.main.pressure,item.wind.speed,item.weather[0].description,item.weather[0].icon,"new");
				this.weblist.push(fav);
		}
		this.weblist=[];
	}
}
