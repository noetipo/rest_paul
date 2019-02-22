import {Injectable} from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class VentasStorageService {
  OBJECTlOGIN: any = 'objectLogin';
  OBJECDATAENTITY: any = 'objectdataentity';
  MENUITEMS: any = 'menuitems';
  USERDATA: any = 'userdata';
  TOKEN: any = 'token';
  errorMessage: string;
  IDUSER: any = 'iduser';

  logoutUser: boolean;

  constructor(private localStorageService: LocalStorageService) {
  }

  getToken() {
    return this.localStorageService.get(this.TOKEN);
  }

  setToken(obj) {
    this.localStorageService.set(this.TOKEN, obj);
  }

  getIdUser() {
    return this.localStorageService.get(this.IDUSER);
  }

  setIdUser(obj) {
    this.localStorageService.set(this.IDUSER, obj);
  }

  setUserData(obj) {
    this.localStorageService.set(this.USERDATA, JSON.stringify(obj));
  }

  getUserData() {
    return JSON.parse(this.localStorageService.get(this.USERDATA));
  }

  getMenuItems() {
    return JSON.parse(this.localStorageService.get(this.MENUITEMS));
  }

  setMenuItems(obj) {
    this.localStorageService.set(this.MENUITEMS, JSON.stringify(obj));
  }

  removeMenuItems() {
    this.localStorageService.remove(this.MENUITEMS);
  }

  logout() {
    this.localStorageService.clearAll();

  }
}
