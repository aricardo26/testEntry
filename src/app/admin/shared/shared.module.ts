import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {NbModule} from '../nb.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FooterComponent} from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NbModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  entryComponents: [
  ]
})
export class SharedModule {
}
