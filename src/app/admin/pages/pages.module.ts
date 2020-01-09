import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {PagesRoutingModule} from './pages-routing.module';
import {SharedModule} from '../shared/shared.module';
import {SidebarComponent} from './dash-board/sidebar/sidebar.component';
import {NbModule} from '../nb.module';
import {FiltersComponent} from './filters/filters.component';
import {CategoriesComponent} from './categories/categories.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {FilterTypeRendererComponent} from './filters/filter-type-renderer/filter-type-renderer.component';
import {FilterValuesRendererComponent} from './filters/filter-values-renderer/filter-values-renderer.component';
import {TreeModule} from 'ng2-tree';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UnitsComponent } from './units/units.component';


@NgModule({
  declarations: [
    DashBoardComponent,
    SidebarComponent,
    FiltersComponent,
    CategoriesComponent,
    FilterTypeRendererComponent,
    FilterValuesRendererComponent,
    UnitsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NbModule,
    Ng2SmartTableModule,
    TreeModule,
    ReactiveFormsModule,
    PagesRoutingModule
  ],
  entryComponents: [
    FilterTypeRendererComponent, FilterValuesRendererComponent
  ],
  exports: [
    SidebarComponent
  ]
})
export class PagesModule {
}
