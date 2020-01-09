import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesRoutingModule} from './pages-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {HelpComponent} from './help/help.component';
import {ProductsDetailsComponent} from './products-details/products-details.component';
import {DialogMessageComponent} from '../shared/dialog-message/dialog-message.component';
import {DialogMessageService} from '../shared/dialog-message/dialog-message.service';
import { ShopsProfileComponent } from './shops-profile/shops-profile.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FlexLayoutModule} from '@angular/flex-layout';
import {OwlModule} from 'ngx-owl-carousel';
import { NgxGalleryModule } from 'ngx-gallery';
import { RegisterComponent } from './register/register.component';
import { SellerStepsComponent } from './seller-steps/seller-steps.component';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { AboutComponent } from './about/about.component';
import { PoliciesComponent } from './policies/policies.component';
import { HelpTopicsComponent } from './help/help-topics/help-topics.component';
import { LoginComponent } from './login/login.component';
import { DeparmentsComponent } from './deparments/deparments.component';
import { WhySellComponent } from './why-sell/why-sell.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NInfoMessageComponent } from './why-sell/n-info-message/n-info-message.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { ShopsComponent } from './shops/shops.component';



@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    FlexLayoutModule,
    OwlModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    CdkStepperModule,
    AngularSvgIconModule,

  ],
  declarations: [
    HomeComponent,
    HelpComponent,
    ProductsDetailsComponent,
    ShopsProfileComponent,
    RegisterComponent,
    SellerStepsComponent,
    AboutComponent,
    PoliciesComponent,
    HelpTopicsComponent,
    PoliciesComponent,
    LoginComponent,
    DeparmentsComponent,
    WhySellComponent,
    NInfoMessageComponent,
    NotfoundComponent,
    ConfirmEmailComponent,
    ShopsComponent
  ],
  entryComponents: [
    NInfoMessageComponent
    //DialogMessageComponent
  ],
  providers: [
    DialogMessageService
  ]
})
export class PagesModule {
}
