import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpErrorResponse,
  HttpResponse,
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth/auth.service';

@Injectable()
export class CatchInterceptorService implements HttpInterceptor {
  private started;
  private authService;

  constructor(private router: Router,
    private injector: Injector) { }


  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.authService = this.injector.get(AuthService);

    this.started = Date.now();
    const handleRequest = next.handle(req);
    const successCallback = this.interceptResponse.bind(this);
    const errorCallback = this.catchError.bind(this);
    const interceptionOperator = tap<HttpEvent<any>>(
      successCallback,
      errorCallback,
    );
    return handleRequest.pipe(interceptionOperator);
  }

  private interceptResponse(event: HttpEvent<any>) {
    // console.log('successCallback : ');
    // console.log(event);
    if (event instanceof HttpResponse) {
      /** Tiempo transcurrido */
      const elapsed_ms = Date.now() - this.started;
      if (elapsed_ms >= 10 * 1000) {
        console.warn(`La solicitud de ${event.url} tomó ${elapsed_ms} ms.`);
      }
    }
  }

  private catchError(err) {
    console.error('errorCallback : ');
    console.error(err);
    if (err instanceof HttpErrorResponse) {
      this.catchHttpError(err);
    } else {
      console.error(err.message);
    }
  }

  private catchHttpError(err: HttpErrorResponse) {
    if (err.status === 401) {
      this.catchUnauthorized();

    } else {
      console.warn(err.statusText);
    }
  }

  private catchUnauthorized() {
    // alert('Not authorized');
    this.cleanAuthData();
    this.setRedirectUrl();
    this.navigateToLogin();

  }

  private cleanAuthData() {
    this.authService.logout();
  }

  private setRedirectUrl() {
    this.authService.setRedirectUrl(this.router.url);
  }

  private navigateToLogin() {
    this.router.navigateByUrl('/auth/login');
  }

}

