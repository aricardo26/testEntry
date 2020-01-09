import {Injectable} from '@angular/core';

import {ApiService} from './api.services';
import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {JwtService} from './jwt.service';
import {FiltersModels} from '../models/filters.models';

@Injectable({providedIn: 'root'})
export class FiltersService {
  constructor(private apiService: ApiService, private jwtService: JwtService) {
  }

  populate(): Observable<FiltersModels> {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      const route = '/filters/' + this.jwtService.getId();
      return this.apiService.get(route)
        .pipe(map(
          data => {
            return data;
          }));
    }
  }

  getAll() {
    return this.apiService.get('/filters')
      .pipe(map(data => data));
  }

  getById(id: string) {
    return this.apiService.get('/filters/' + id)
      .pipe(map(data => data));
  }


}
