import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';

import {AuthenticationService} from '../services/authentication.service';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    } else {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });
    }

    return next.handle(request).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          this.authenticationService.logout();
        }
        return throwError(error);
      }));
  }
}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(ok => {
        const exp = localStorage.getItem('exp');
        if (ok instanceof HttpResponse && exp !== null && exp !== '' &&
          this.authenticationService.isTokenExpired(Number(exp))) {
          this.refreshToken();
        }
      }));
  }

  private refreshToken() {

    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authenticationService.refreshToken()
        .subscribe((token: any) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token);
          // return next.handle(request);
        });
    }
  }
}
