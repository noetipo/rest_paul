import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {VentasStorageService} from '../ventasStorage.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
              private ventasStorageService: VentasStorageService) {
  }

  canActivate(): boolean {

    if (!this.ventasStorageService.getToken()) {
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
  }

  /*
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

      return this.afAuth.authState
        .take(1)
        .map(user => !!user)
        .do(loggedIn => {
          if (!loggedIn) {
            console.log("access denied")
            this.router.navigate(['/login']);
          }
      })
  }
  */
}
