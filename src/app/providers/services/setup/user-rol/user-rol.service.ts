import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IResponse} from '../../response';

@Injectable()
export class UserRolService {

  private url: string = 'rol-usuario/';

  constructor(private http: HttpClient) {
  }

  public getRolUser$(userId): Observable<IResponse> {
    return this.http.get<IResponse>(this.url + userId);
  }

  public posRolUser$(rolUser: object): Observable<IResponse> {
    return this.http.post<IResponse>(this.url, rolUser);
  }
}
