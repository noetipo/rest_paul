import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IResponse} from '../response';


@Injectable()
export class PartidaService {
  private url: string = 'partida/';

  constructor(private http: HttpClient) {
  }

  public getParidas$(): Observable<IResponse> {
    return this.http.get<IResponse>(this.url);
  }

  public getParidasDetalle$(codPartida: string): Observable<IResponse> {
    return this.http.get<IResponse>(this.url + codPartida);
  }
}
