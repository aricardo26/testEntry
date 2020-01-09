import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';
import {ServicesClientModule} from './services/services.module';
import {ServicesCoreModule} from '../../../core/services/services.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    ServicesCoreModule,
    ServicesClientModule
  ],
  declarations: []
})
export class CoreModule {
}
