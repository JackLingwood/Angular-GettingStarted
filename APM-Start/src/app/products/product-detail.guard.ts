import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router){ // Inject Router to control navigation.
  }

  canActivate(
    next: ActivatedRouteSnapshot, // Current router information
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {  // Router state information

      let id = +next.url[1].path;  // Pull the first parameter at index 1, index 0 = route name
      if (isNaN(id) || id < 1){
        alert('Invalid product Id');
        this.router.navigate(['/products']);
        return false;
      }
    return true;
  }
}
