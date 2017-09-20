import { NgModule } from '@angular/core';
import { RouterModule,Routes }   from '@angular/router';



import{AuthGuard} from './authgaurd.service';

import { AppComponent } from './app.component';
import { ParentControlComponent } from './parent-control/parent-control.component';
import { SearchControlComponent } from './search-control/search-control.component';
import { ListControlComponent } from './list-control/list-control.component';
import { DetailListComponent } from './detail-list/detail-list.component';
import { LoginControlComponent } from './login-control/login-control.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FavouriteControlComponent} from './favourite-control/favourite-control.component'

const routes: Routes = [
						{  path:'',redirectTo:'login-control',pathMatch:'full'},
						{  path:'parent-control',component:ParentControlComponent},
						{  path:'login-control',component:LoginControlComponent,
					     children:[
					    {  path:'',redirectTo:'login',pathMatch:'full'},
						{  path:'login',component:LoginComponent},
						{  path:'signup',component:SignupComponent}]},
						{  path:'favourite-control',canActivate:[AuthGuard],component:FavouriteControlComponent }
];

@NgModule({
 
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
