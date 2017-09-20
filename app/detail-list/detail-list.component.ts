import { Component, OnInit,Input } from '@angular/core';

import {FavouriteService} from '../favourite.service';

import{Favourite} from '../favourite';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {
@Input() Data:any;
p: number = 1;
cityid="";
cityname="";
constructor(private favService: FavouriteService) {
  console.log(this.Data);
}
ngOnInit(){

}

addfavourite(favelement:any){
       this.favService.create(favelement);
}


}
