
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticantionGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if( this.authService.isAuthenticated() ){
        return true; }

      this.router.navigate(['login'], { queryParams: {next: state.url} });
      return false;

  }
  
}
