import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {filtersType} from '../enums/filtersType.enums';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class UnitsModels {
  id: string;
  code: string;
  description: string;
}
