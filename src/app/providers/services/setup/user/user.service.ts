import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IResponse} from '../../response';

@Injectable()
export class UserService {

  private url: string = 'user';
  constructor(private http: HttpClient) {
  }
  public getUsers$(): Observable<IResponse> {
    return this.http.get<IResponse>(this.url);
  }
  public postUser$(user: object): Observable<IResponse> {
    return this.http.post<IResponse>(this.url, user);
  }
}
