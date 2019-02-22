import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IResponse} from '../../response';

@Injectable()
export class ModulService {
  private url: string = 'mudulo-padre';

  constructor(private http: HttpClient) {
  }

  public getModulsParent$(): Observable<IResponse> {
    return this.http.get<IResponse>(this.url);
  }

}
