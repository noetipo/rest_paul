import {Injectable} from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

import {IResponse} from '../response';



@Injectable()
export class AuthService {
  private requestPasswd: any = 'resetPassord';
  private passwdToken: any = 'resetPassordValida';
  private loginUrl: string = 'login';
  private resgisterUrl: string = 'user';
  private userDetailUrl: string = 'details';

  /** Esto nunca sera cambiado */
  private redirectUrl: string = 'pages';

  private logoutBackUrl = 'loguot';

  /** Esta url cambiará */

  constructor(private localStorageService: LocalStorageService,
              private http: HttpClient) {

  }

  public authenticate$(sendData: {}): Observable<any> {
    // console.log('authenticate');
    // console.log(recurso);
    // console.log(sendData);
    return this.http.post<IResponse>(this.loginUrl, sendData);
  }


  public userDetail$(sendData: {}): Observable<any> {
    // console.log('authenticate');
    // console.log(recurso);
    // console.log(sendData);
    return this.http.post<IResponse>(this.userDetailUrl, sendData);
  }

  public registerUser$(user: object): Observable<IResponse> {
    return this.http.post<IResponse>(this.resgisterUrl, user);
  }
  public requestPassword(correo: String): Observable<IResponse> {
    return this.http.get<IResponse>(this.requestPasswd + '/' + correo);
  }

  public validaToken(token: String): Observable<IResponse> {
    return this.http.get<IResponse>(this.passwdToken + '/' + token);
  }

  public resetPassword(sendData: any): Observable<IResponse> {
    return this.http.put<IResponse>(this.requestPasswd, sendData);
  }

  public logoutBack$(): Observable<IResponse> {
    return this.http.get<IResponse>(this.logoutBackUrl);
  }


  public logout() {
    // Entrar a la DB para matar una sesion
    this.localStorageService.clearAll();
  }

  public register(provider: string, data?: any) {
    //
  }


  public getRedirectUrl(): string {
    return this.redirectUrl;
  }

  public setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }


}
