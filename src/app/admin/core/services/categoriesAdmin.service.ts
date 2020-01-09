import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {ApiService} from '../../../../core/services/api.services';
import {JwtService} from '../../../../core/services/jwt.service';
import {CategoriesModels} from '../../../../core/models/categories.models';

@Injectable({providedIn: 'root'})
export class CategoriesAdminService {
  constructor(private http: HttpClient, private apiService: ApiService, private jwtService: JwtService) {
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

  save(categories: any) {
    return this.apiService.post('/admin/categories', categories);
  }

  delete(id: string) {
    return this.apiService.delete('/admin/categories/' + id);
  }


}
