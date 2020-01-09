import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {ApiService} from '../../../../core/services/api.services';
import {JwtService} from '../../../../core/services/jwt.service';
import {FiltersModels} from '../../../../core/models/filters.models';

@Injectable({providedIn: 'root'})
export class FiltersAdminService {
  constructor(private http: HttpClient, private apiService: ApiService, private jwtService: JwtService) {
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

  save(filters: any) {
    return this.apiService.post('/admin/filters', filters);
  }

  delete(id: string) {
    return this.apiService.delete('/admin/filters/' + id);
  }


}
