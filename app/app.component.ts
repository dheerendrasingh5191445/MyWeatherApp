import { Component } from '@angular/core';

import {MyLoginService} from './mylogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private loginservice:MyLoginService ){}
 
  login(){
    this.loginservice.setmylogin(true);
  }
}
