import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ReniecSunatService {


  private urlReniec: string = 'https://tecactus.com/api/reniec/dni';

  constructor(private http: HttpClient) {
  }

  public getPersonReniec$(sendData: {}): Observable<any> {
    return this.http.post<any>(this.urlReniec, sendData);
  }
}
