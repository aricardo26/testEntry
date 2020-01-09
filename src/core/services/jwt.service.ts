import {Injectable, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ]
})
@Injectable()
export class JwtService {

  getToken(): String {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

  getId(): String {
    return window.localStorage['id'];
  }

  saveId(token: String) {
    window.localStorage['id'] = token;
  }

  destroyId() {
    window.localStorage.removeItem('id');
  }

  getLang(): String {
    return window.localStorage['lang'];
  }

  saveLang(token: String) {
    window.localStorage['lang'] = token;
  }

  destroyLang() {
    window.localStorage.removeItem('lang');
  }

}
