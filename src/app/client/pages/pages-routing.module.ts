import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HelpComponent} from './help/help.component';
import {ProductsDetailsComponent} from './products-details/products-details.component';
import {WorksComponent} from './works/works.component';
import {ShopsProfileComponent} from './shops-profile/shops-profile.component';
import {RegisterComponent} from './register/register.component';
import {SellerStepsComponent} from './seller-steps/seller-steps.component';
import {AboutComponent} from './about/about.component';
import {PoliciesComponent} from './policies/policies.component';
import {HelpTopicsComponent} from './help/help-topics/help-topics.component';
import {LoginComponent} from './login/login.component';
import {DeparmentsComponent} from './deparments/deparments.component';
import {WhySellComponent} from './why-sell/why-sell.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {ConfirmEmailComponent} from './confirm-email/confirm-email.component';
import {ShopsComponent} from './shops/shops.component';

const routes: Routes = [
  {path: '', component: NotfoundComponent},
  {path: 'home', component: HomeComponent},
  {path: 'help', component: HelpComponent},
  {path: 'help/help-topics', component: HelpTopicsComponent},
  {path: 'product-details', component: ProductsDetailsComponent},
  {path: 'shops-profile', component: ShopsProfileComponent},
  {path: 'policies', component: PoliciesComponent},
  {path: 'deparments', component: DeparmentsComponent},
  {path: 'works', component: WorksComponent},
  {path: 'shops', component: ShopsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'seller-steps', component: SellerStepsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'why-sell', component: WhySellComponent},
  {path: 'login', component: LoginComponent},
  {path: 'confirm', component: ConfirmEmailComponent},
  // {path: '**', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
