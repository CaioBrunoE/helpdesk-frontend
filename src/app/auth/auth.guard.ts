import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 //versao JWT-angular  instalada npm install @auth0/angular-jwt@5.0.2

  constructor(private authService: AuthService, private router:Router){}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    let authenticated = this.authService.isAuthenticated();
    if(authenticated){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
