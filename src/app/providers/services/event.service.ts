import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class EventService {
  private eventSubject: Subject<any> = new ReplaySubject(1);
  constructor() {
  }

  // set observable of this subject
  get $getEventSubject(): Observable<any> {
    return this.eventSubject.asObservable();
  }

  // remove from observer
  resetEventObserver(): void {
    this.eventSubject = new ReplaySubject(1);
  }

  // send event to observers
  sendCustomEvent(): void {

    this.eventSubject.next(true);
  }

}
