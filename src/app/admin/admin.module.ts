import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdminComponent} from './admin.component';
import {SharedModule} from './shared/shared.module';
import {PagesModule} from './pages/pages.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {CoreModule} from './core/core.module';
import {AdminRoutingModule} from './admin-routing.module';
import {NbModule} from './nb.module';
import {SimpleDialogComponent} from './shared/simple-dialog/simple-dialog.component';


@NgModule({
  declarations: [
    AdminComponent,
    SimpleDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AdminRoutingModule,
    CoreModule,
    FormsModule,
    NbModule,
    FlexLayoutModule,
    SharedModule,
    PagesModule
  ],
  entryComponents: [
    SimpleDialogComponent
  ],
  providers: []
})
export class AdminModule {
}
