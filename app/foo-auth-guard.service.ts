import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class FooAuthGuard implements CanActivate {

  constructor() {
    console.log("guard constructed...");
  }
  canActivate(next: ActivatedRouteSnapshot, prev: RouterStateSnapshot) {
    console.log("GUARD - next: " + JSON.stringify(next.url) + ", prev: " + prev.url);
    return true;
  }
}