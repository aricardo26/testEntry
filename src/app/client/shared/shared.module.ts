import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {HeadersComponent} from './headers/headers.component';
import {BoxesComponent} from './boxes/boxes.component';
import {CardsComponent} from './cards/cards.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {DialogMessageComponent} from './dialog-message/dialog-message.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {OwlModule} from 'ngx-owl-carousel';
import {CarouselComponent} from './carousel/carousel.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { StepperComponent } from './stepper/stepper.component';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { DepartmentsComponent } from './departments/departments.component';
import { FilterStyleComponent } from './filter-style/filter-style.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MegaFiltersComponent } from './mega-filters/mega-filters.component';
import {AngularSvgIconModule} from 'angular-svg-icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgSelectModule,
    FlexLayoutModule,
    OwlModule,
    CdkStepperModule,
    NgbModule,
    AngularSvgIconModule
  ],
  declarations: [
    FooterComponent,
    HeadersComponent,
    BoxesComponent,
    CardsComponent,
    BreadcrumbComponent,
    DialogMessageComponent,
    CarouselComponent,
    StepperComponent,
    DepartmentsComponent,
    FilterStyleComponent,
    MegaFiltersComponent
  ],
  exports: [
    FooterComponent,
    HeadersComponent,
    BoxesComponent,
    CardsComponent,
    BreadcrumbComponent,
    DialogMessageComponent,
    CarouselComponent,
    StepperComponent,
    DepartmentsComponent,
    FilterStyleComponent,
    MegaFiltersComponent
  ],
  entryComponents: [
    DialogMessageComponent
  ]

})
export class SharedModule {
}
