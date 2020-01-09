import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {NbModule} from "../nb.module";
import { SidebarCommerceComponent } from './sidebar-commerce/sidebar-commerce.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';




@NgModule({
  declarations: [HeaderComponent, SidebarCommerceComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    NbModule
  ],
  exports: [
    HeaderComponent,
    SidebarCommerceComponent
  ],
})
export class SharedModule { }
