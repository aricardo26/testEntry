import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {DashBoardComponent} from './pages/dash-board/dash-board.component';
import {FiltersComponent} from './pages/filters/filters.component';
import {CategoriesComponent} from './pages/categories/categories.component';
import {AuthGuard} from '../../core/security/auth.guard';
import {UnitsComponent} from './pages/units/units.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, // todo poner los roles y lo que lleva
    // canActivate: [AuthGuard], // data: { roles: [Role.Admin] },
    children: [
      {
        path: '', component: DashBoardComponent
      },
      {
        path: 'filters', component: FiltersComponent
      },
      {
        path: 'categories', component: CategoriesComponent
      },
      {
        path: 'units', component: UnitsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
