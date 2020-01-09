import {NgModule} from '@angular/core';
import {FiltersAdminService} from './filtersAdmin.service';
import {FiltersService} from '../../../../core/services/filters.service';
import {NotificationsService} from './notifications.service';
import {CategoriesAdminService} from './categoriesAdmin.service';
import {CategoriesService} from '../../../../core/services/categories.service';

@NgModule({
  providers: [
    FiltersAdminService,
    FiltersService,
    NotificationsService,
    CategoriesAdminService,
    CategoriesService
  ],
  exports: [
  ]
})
export class ServicesAdminCoreModule {

}
