import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FiltersModels} from './filters.models';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class CategoriesModels {
  id: string;
  name: string;
  filters: FiltersModels[];
  categories: CategoriesModels[];
  isUsed: boolean;
}
