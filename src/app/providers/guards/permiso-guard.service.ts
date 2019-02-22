import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';


@Injectable()
export class PermisoGuardService implements CanActivate {



  permisosUser = [
    'test1',
    'pages',
  ];

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedAccess = route.data.expectedAccess;
    // console.log('state.url')
    // console.log(state.url)


    if (this.permisosUser.indexOf(expectedAccess) === -1) {
      return true;
    } else {
      alert('No tiene Permiso a ' + expectedAccess);
      // Redirtect page no authorization.
      return false;
    }
  }
}
