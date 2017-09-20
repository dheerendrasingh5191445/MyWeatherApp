import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppRoutingModule }     from './approuting.module';
import { FormsModule }   from '@angular/forms'; 
import {NgxPaginationModule} from 'ngx-pagination';  


import{WeatherService} from './apidata.service';
import{FavouriteService} from './favourite.service';
import { MyLoginService }      from './mylogin.service';
import{AuthGuard } from './authgaurd.service';

import { AppComponent } from './app.component';
import { ParentControlComponent } from './parent-control/parent-control.component';
import { SearchControlComponent } from './search-control/search-control.component';
import { ListControlComponent } from './list-control/list-control.component';
import { DetailListComponent } from './detail-list/detail-list.component';
import { LoginControlComponent } from './login-control/login-control.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FavouriteControlComponent } from './favourite-control/favourite-control.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentControlComponent,
    SearchControlComponent,
    ListControlComponent,
    DetailListComponent,
    LoginControlComponent,
    LoginComponent,
    SignupComponent,
    FavouriteControlComponent
  ],
  imports: [
     BrowserModule,
     HttpModule,
     AppRoutingModule,
     FormsModule,
     NgxPaginationModule
  ],
  providers: [WeatherService,FavouriteService,MyLoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
