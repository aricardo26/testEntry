import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ClientRoutingModule} from './client-routing.module';
import {ClientComponent} from './client.component';
import {SharedModule} from './shared/shared.module';
import {PagesModule} from './pages/pages.module';
import {WorksComponent} from './pages/works/works.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CoreModule} from './core/core.module';





@NgModule({
  declarations: [
    ClientComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClientRoutingModule,
    CoreModule,
    NgbModule,
    FormsModule,
    FlexLayoutModule,
    SharedModule,
    PagesModule
  ],
  providers: []
})
export class ClientModule {
}
