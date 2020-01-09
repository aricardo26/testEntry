import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {User} from '../models/user';
import {ApiService} from './api.services';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private apiService: ApiService) {
    try {
      const exp = localStorage.getItem('exp');
      if (exp === null || exp === '' || this.isTokenExpired(Number(exp))) {
        console.log(1)
        localStorage.clear();
      }
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();

    } catch (e) {
      console.log(12)
      localStorage.clear();
    }
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.apiService.post(`/auth/signin`, {username, password})
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        const decode = this.parseJwt(user.token);
        localStorage.setItem('exp', decode.exp);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  refreshToken() {
    return this.apiService.put(`/auth/refresh_token`, {})
      .pipe(tap((tokens: any) => {
          const decode = this.parseJwt(tokens.token);
          localStorage.setItem('exp', decode.exp);
          const current = JSON.parse(localStorage.getItem('currentUser'));
          current.token = tokens.token;
          localStorage.setItem('currentUser', JSON.stringify(current));
        }),
        catchError(err => throwError(err)));
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem('currentUser', jwt);
  }

  private parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  private getTokenExpirationDate(time: number) {
    const date = new Date(0);
    date.setUTCSeconds(time);
    return date;
  }

  isTokenExpired(exp: number) {
    const date = this.getTokenExpirationDate(exp);
    if (date === null) {
      return true;
    }
    const offset = 120; // number in sec before for refresh token
    return !(date.valueOf() > new Date().valueOf() + offset * 1000);
  }

  registerUser(form: any) {
    return this.apiService.post(`/user/register`, form);
  }

  confirmEmail(token: string) {
    return this.apiService.post(`/user/register/confirm`, { token });
  }
}
