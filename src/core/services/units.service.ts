import {Injectable} from '@angular/core';

import {ApiService} from './api.services';
import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {JwtService} from './jwt.service';
import {FiltersModels} from '../models/filters.models';

@Injectable({providedIn: 'root'})
export class UnitsService {
  constructor(private apiService: ApiService, private jwtService: JwtService) {
  }

  populate(): Observable<FiltersModels> {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      const route = '/units/' + this.jwtService.getId();
      return this.apiService.get(route)
        .pipe(map(
          data => {
            return data;
          }));
    }
  }

  getAll() {
    return this.apiService.get('/units')
      .pipe(map(data => data));
  }

  getById(id: string) {
    return this.apiService.get('/units/' + id)
      .pipe(map(data => data));
  }


}
