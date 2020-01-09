import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ClientModule} from './client/client.module';
import {AdminModule} from './admin/admin.module';
import {CommerceModule} from './commerce/commerce.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtService} from '../core/services/jwt.service';
import {ApiService} from '../core/services/api.services';
import {JwtInterceptor, TokenInterceptor} from '../core/security/jwt.interceptor';
import {ErrorInterceptor} from '../core/security/error.interceptor';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtService,
    ApiService,
    NgbModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    AdminModule,
    CommerceModule,
    ClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
