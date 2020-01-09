import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {filtersType} from '../enums/filtersType.enums';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class FiltersModels {
  id: string;
  name: string;
  filterType: filtersType;
  values: [];
  isUsed: boolean;
  priority: number;
}
