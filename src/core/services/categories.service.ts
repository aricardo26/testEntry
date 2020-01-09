import {Injectable} from '@angular/core';

import {ApiService} from './api.services';
import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {JwtService} from './jwt.service';
import {CategoriesModels} from '../models/categories.models';

@Injectable({providedIn: 'root'})
export class CategoriesService {
  constructor(private apiService: ApiService, private jwtService: JwtService) {
  }

  populate(): Observable<CategoriesModels> {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      const route = '/categories/' + this.jwtService.getId();
      return this.apiService.get(route)
        .pipe(map(
          data => {
            return data;
          }));
    }
  }

  getAll() {
    return this.apiService.get('/categories')
      .pipe(map(data => data));
  }

  getById(id: string) {
    return this.apiService.get('/categories/' + id)
      .pipe(map(data => data));
  }


}
