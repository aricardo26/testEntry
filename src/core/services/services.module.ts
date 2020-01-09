import {NgModule} from '@angular/core';
import {NavigatorService} from './navigator.service';

@NgModule({
  imports: [
    NavigatorService
  ],
  exports: [
    NavigatorService
  ]
})
export class ServicesCoreModule {

}
