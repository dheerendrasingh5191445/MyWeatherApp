import { Component,Output,Input, OnInit,EventEmitter } from '@angular/core';
import {WeatherService} from'../apidata.service';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.css']
})
export class SearchControlComponent implements OnInit {
@Output() object=new EventEmitter<any>();
p: number = 1;
selection="Delhi";
MyWebData:any;
 constructor(private WeaService: WeatherService) {}

ngOnInit(){
	this.getWeather();
}
getWeather(){
  this.WeaService.getData(this.selection)
                 .subscribe(data=>{this.MyWebData=data;
                 console.log("hello i am recieving data" +this.MyWebData);
                 this.object.emit(this.MyWebData);
            })
}

}
