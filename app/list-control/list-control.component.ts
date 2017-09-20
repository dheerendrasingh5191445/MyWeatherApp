import { Component, OnInit ,Input,OnChanges, SimpleChanges} from '@angular/core';
import {Favourite} from'../favourite';

@Component({
  selector: 'app-list-control',
  templateUrl: './list-control.component.html',
  styleUrls: ['./list-control.component.css']
})
export class ListControlComponent implements OnChanges {
@Input() json:Favourite;
modellist:any;

  constructor() { }
ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {  
	let change = changes[propName];
    this.modellist=change.previousValue;
        console.log("current object"+change.currentValue);
        console.log("previous object"+change.previousValue);
  }
}

}
