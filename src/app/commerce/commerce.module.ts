import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommerceComponent} from './commerce.component';
import {SharedModule} from './shared/shared.module';
import {PagesModule} from './pages/pages.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CoreModule} from './core/core.module';
import {CommerceRoutingModule} from './commerce-routing.module';
import {NbModule} from './nb.module';



@NgModule({
  declarations: [
    CommerceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommerceRoutingModule,
    CoreModule,
    NgbModule,
    NbModule,
    FormsModule,
    FlexLayoutModule,
    SharedModule,
    PagesModule
  ],
  providers: []
})
export class CommerceModule {
}
