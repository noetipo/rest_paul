import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IResponse} from '../../response';

@Injectable()
export class RolModuleService {


  private url: string = 'rol-modulo';

  constructor(private http: HttpClient) {
  }

  public getRolModule$(filters: any): Observable<IResponse> {
    return this.http.get<IResponse>(this.url, {params: filters});
  }

  public posRolModule$(rolUser: object): Observable<IResponse> {
    return this.http.post<IResponse>(this.url, rolUser);
  }
}
