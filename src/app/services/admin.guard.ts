import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  private _url: string;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  public get url(): string {
    return this._url;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this._url = state.url;

    if (this.auth.token === null || this.auth.token === undefined) {
      this.router.navigateByUrl('login');
      return false;
    }
    return true;
  }

}
