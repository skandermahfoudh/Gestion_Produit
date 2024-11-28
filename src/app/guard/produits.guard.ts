import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
@Injectable(
  {providedIn:'root'}
)
export class produitsGuard implements CanActivate {
  constructor(private authServ: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authServ.testerAdmin()) {
      console.log('test admin true')
      return true;
    } else {
      console.log('test admin false')
      this.router.navigate(['/forbidden']);
      
    }
    return false;
  }
}