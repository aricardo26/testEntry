import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class Breadcrumb {
  name: {
    en: string;
    es: string;
  };
  url: string;
}
