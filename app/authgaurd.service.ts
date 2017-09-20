import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { MyLoginService }      from './mylogin.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: MyLoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let response=this.authService.getmylogin();
    if(response==true)return true;
    else this.router.navigate['/login-control'];
           
  }
}
