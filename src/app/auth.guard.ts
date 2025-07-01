import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import {map, Observable, take} from 'rxjs';
import { AuthService } from './components/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.isLoggedIn().pipe(
      take(1), // Toma el primer valor y completa la suscripción
      map(isLoggedIn => {
        if (isLoggedIn) {
          return true;
        } else {
          return this.router.createUrlTree(['/login']); // Redirige si no está logueado
        }
      })
    );
  }


}
