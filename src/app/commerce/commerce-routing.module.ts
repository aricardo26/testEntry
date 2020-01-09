import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommerceComponent} from "./commerce.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {PedidosComponent} from "./pages/pedidos/pedidos.component";

const routes: Routes = [
  {
    path: 'commerce', component: CommerceComponent,
    children: [
      { path: '', component: DashboardComponent},
      { path: 'pedidos', component: PedidosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CommerceRoutingModule { }
