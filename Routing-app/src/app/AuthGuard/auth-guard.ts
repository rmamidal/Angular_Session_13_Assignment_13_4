import { Component, Injectable } from "@angular/core"
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router"

@Injectable()
export class AuthGuardComponent implements CanActivate {
    constructor(private _router: Router) {}
    // Return true if the session value of "authenticated" it true.
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(sessionStorage.getItem('authenticated') == "true"){
        return true;
      }
      // Return false if the session value of "authenticated" it false.
      return false;
    }
}
