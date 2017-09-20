import { Component, OnInit } from '@angular/core';

import {LoginService} from '../login.service';

@Component({
  selector: 'app-login-control',
  templateUrl: './login-control.component.html',
  styleUrls: ['./login-control.component.css'],
  providers:[LoginService]
})
export class LoginControlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
