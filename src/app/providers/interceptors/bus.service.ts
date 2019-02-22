import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BusService {
  private userToken$ = new Subject<any>();
  private userIsAnonymousToken$ = new BehaviorSubject<boolean>(true);

  constructor() { }

  public getUserToken$(): Observable<any> {
    return this.userToken$.asObservable();
  }

  public getUserIsAnonymous$(): Observable<boolean> {
    return this.userIsAnonymousToken$.asObservable();
  }

  public emitUserToken(userToken: any) {
    this.userToken$.next(userToken);
    this.userIsAnonymousToken$.next(userToken == null);
  }
}
