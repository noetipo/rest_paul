import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IResponse} from '../../response';

@Injectable()
export class PersonService {

  private url: string = 'persona/';
  constructor(private http: HttpClient) {
  }

  public getPersons$(): Observable<IResponse> {
    return this.http.get<IResponse>(this.url);
  }

  public getPersonByDni$(dni: string): Observable<IResponse> {

    return this.http.get<IResponse>(this.url + dni);
  }

  postPerson$(rol: object): Observable<IResponse> {
    return this.http.post<IResponse>(this.url, rol);
  }
  putPerson$(per_id: string, person: object): Observable<IResponse> {
    return this.http.put<IResponse>(this.url + per_id, person);
  }
}

