import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IResponse} from '../../response';

@Injectable()

export class UserModuleService {
  private url: string = 'setup/list-modulo-user/';

  constructor(private http: HttpClient) {
  }

  public getUserModule$(id: string): Observable<IResponse> {
    return this.http.get<IResponse>(this.url + id);
  }


}
