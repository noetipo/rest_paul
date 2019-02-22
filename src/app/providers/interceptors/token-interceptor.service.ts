import {Injectable} from '@angular/core';
import {HttpRequest, HttpEvent, HttpHandler, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
// import { BusService } from './bus.service';
import {VentasStorageService} from '../ventasStorage.service';
import {environment} from '../../../environments/environment';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  private token: any = 'InitialAuthorizationToken';
  private header: any;

  constructor(
    // private busService: BusService,
    private ventasStorageService: VentasStorageService,
  ) {
  }

  private subscribeToTokenChanges() {
    this.token = this.ventasStorageService.getToken();
    // this.busService.getUserToken$().subscribe(this.setTokenIfAny.bind(this))
  }

  /*
  private setTokenIfAny(data) {
    if (data && data.token) {
      this.token = data.token;
    }
  }*/

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.subscribeToTokenChanges();

    const authorizationReq = this.token ? this.setAuthHeader(req) : req;
    const urlReq = this.setUrl(authorizationReq);
    const handleRequest = next.handle(urlReq);
    return handleRequest;
  }

  private setAuthHeader(req: HttpRequest<any>): HttpRequest<any> {
    const authorization = this.token;
    if (req.url === 'https://tecactus.com/api/reniec/dni' || req.url === 'https://tecactus.com/api/sunat/query/ruc') {
      this.header = req.headers
        .set('Accept', 'application/json') /** Optional */
        .set('Authorization', 'Bearer' + ' ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiI' +
          'sImp0aSI6ImUwNDM5NDA0YWVlOTQzN2Y4ZmU' +
          'wOTc4ZTYzNzg2Y2M2OTQxYjM1OWNkZTUyMGJjNzM4OTFmMmIyODEzNWM5ODIwZWM5ZjU5YWJiMmIwZ' +
          'jJmIn0.eyJhdWQiOiIxIiwianRpIjoiZTA0Mzk0MDRhZWU5NDM3ZjhmZTA5NzhlNjM3ODZjYzY5NDFi' +
          'MzU5Y2RlNTIwYmM3Mzg5MWYyYjI4MTM1Yzk4MjBlYzlmNTlhYmIyYjBmMmYiLCJpYXQiOjE1MzYwNzc5NTA' +
          'sIm5iZiI6MTUzNjA3Nzk1MCwiZXhwIjoxNTY3NjEzOTUwLCJzdWIiOiIyMjA0Iiwic2NvcGVzIjpbInVzZS1yZW5p' +
          'ZWMiLCJ1c2Utc3VuYXQiXX0.LjfHBfLCBNo5qfvGRVSBXeSa0a4BKAlf8Rskgcmsu6Ay-7wvwqOAiE59muCZyHEfe0FV' +
          'ZVEGmGkvet4GC4w6tKaAliInkaWci1WX-TPXmTtKkkS3S4b1gssPEEttyonLP5-5WKsD3PfCPr19-Zjt3LDQ_l8H7xHrxi' +
          'mVWKJPDHVILaOhzX3Ln3YWqXQNw5cLtCEEN1fW0Az-lKxdO44KgRv-TKJuzzKiVrzigMZ9nX5w96kA2akfg2k3cJSNhqnW8XE' +
          'RqHBE_f9pYrCZaTON9n_iCQzM_FHejwgEpQm-kC9Drh4ppZCUNDmc-T5KaX8n1o49kGWKnBRr5KMHiILtzaowCf3l80DkY47u' +
          'AF28emGHE4G7Skc3OF1un9vJqOmxMemhjKpFKAJ33PsbIo8LA7hrGR28Y6B68iiTrYJzSWIG-4nDDopo58xGM-VDywxvtHuxG4UR99' +
          'edHe59glFOO-BbE7V9xn8yf5UCo0a8182tv-ZXPnQAXnwLLh41Qfg4WuEFzfvxh5n-uF-N0R6EhX9c5ABA5IDSvADeGYAbIurrwQ7O' +
          'WZabjgqbdm57Fby6gSRM4QZD9BfSTlS_xhtrJPD6wg_uM7vzGh6rcQay6jWGPny2R2H1YdMVK_1UkINJdaa8Yczero' +
          'v7SQn55SjVzcAgUwNR29X160j8_lgXaZ0');


    } else {
      this.header = req.headers
        .set('Content-Type', 'application/json') /** Optional */
        .set('Authorization', 'Bearer ' + authorization);
    }


    const authorizationReq = req.clone({headers: this.header});

    return authorizationReq;
  }

  private setUrl(req: HttpRequest<any>): HttpRequest<any> {
    if (req.url === 'https://tecactus.com/api/reniec/dni') {
      return req.clone({url: `${req.url}`});
    } else if (!req.url.includes('assets/')) {
      return req.clone({url: `${environment.urls}${req.url}`});
    } else {
      return req.clone({url: `${req.url}`});
    }

  }

}
