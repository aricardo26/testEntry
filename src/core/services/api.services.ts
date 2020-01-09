import {Injectable, NgModule} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {forkJoin, Observable, throwError} from 'rxjs';

import {CommonModule} from '@angular/common';
import {Error} from 'tslint/lib/error';
import {catchError} from 'rxjs/operators';

@NgModule({
  imports: [
    CommonModule
  ]
})
@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.urlServer}${path}`, {params})
      .pipe(catchError(err => throwError(this.formatErrors)));
  }

  put(path: string, body: any = {}): Observable<any> {
    return this.http.put(
      `${environment.urlServer}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(err => throwError(this.formatErrors)));
  }

  post(path: string, body: any = {}): Observable<any> {
    return this.http.post(
      `${environment.urlServer}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(err => throwError(this.formatErrors)));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.urlServer}${path}`
    ).pipe(catchError(err => throwError(this.formatErrors)));
  }

  private formatErrors(error: any) {
    return new Error(error.error);
  }

  all(request: any []): Observable<any[]> {
    return forkJoin(request);
  }
}
