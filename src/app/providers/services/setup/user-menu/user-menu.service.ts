import {Injectable} from '@angular/core';
import {IResponse} from '../../response';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserMenuService {

  private url: string = 'menu';

  constructor(private http: HttpClient) {
  }

  public getUserMenu$(): Observable<IResponse> {
    return this.http.get<IResponse>(this.url);
  }
}
