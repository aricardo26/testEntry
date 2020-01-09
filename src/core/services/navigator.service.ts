import {Injectable, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ]
})
@Injectable()
export class NavigatorService {

  constructor() {
  }

  isChrome() {
    return navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  }
  isFirefox() {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  }
  isOpera() {
    return navigator.userAgent.toLowerCase().indexOf('opera') > -1;
  }
  isMSIE() {
    return navigator.userAgent.toLowerCase().indexOf('MSIE') > -1;
  }
}
