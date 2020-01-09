import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {PagesRoutingModule} from './pages-routing.module';
import {NbModule} from "../nb.module";
import { PedidosComponent } from './pedidos/pedidos.component';



@NgModule({
  declarations: [DashboardComponent, PedidosComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbModule,
  ]
})
export class PagesModule { }
