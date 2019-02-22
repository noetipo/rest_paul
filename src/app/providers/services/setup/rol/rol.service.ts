import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IResponse} from '../../response';


@Injectable()
export class RolService {
  private url: string = 'rol';

  constructor(private http: HttpClient) {
  }

  public getRoles$(): Observable<IResponse> {
    return this.http.get<IResponse>(this.url);
  }

  deleteRol$(id: string): Observable<IResponse> {
    return this.http.delete<IResponse>(this.url + '/' + id);

  }

  getRol$(id: string): Observable<IResponse> {
    return this.http.get<IResponse>(this.url + '/' + id);
  }

  postRol$(rol: object): Observable<IResponse> {
    return this.http.post<IResponse>(this.url, rol);
  }

  putRol$(rol_id: string, rol: object): Observable<IResponse> {
    return this.http.put<IResponse>(this.url + '/' + rol_id, rol);
  }

}

