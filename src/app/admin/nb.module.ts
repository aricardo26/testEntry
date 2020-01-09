import {NgModule} from '@angular/core';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbSidebarService,
  NbMenuModule,
  NbCardModule,
  NbActionsModule,
  NbIconModule,
  NbUserModule,
  NbTreeGridModule,
  NbDialogModule,
  NbDialogRef,
  NbToastrService, NbToastrModule, NbInputModule, NbSelectModule
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';


@NgModule({
  declarations: [],
  imports: [
    NbThemeModule.forRoot({name: 'corporate'}),
    NbSidebarModule,
    NbLayoutModule,
    NbMenuModule,
    NbCardModule,
    NbActionsModule,
    NbEvaIconsModule,
    NbIconModule,
    NbUserModule,
    NbTreeGridModule,
    NbMenuModule.forRoot(),
    NbToastrModule.forRoot(),
    NbInputModule,
    NbSelectModule
  ],
  exports: [
    NbThemeModule,
    NbSidebarModule,
    NbLayoutModule,
    NbMenuModule,
    NbCardModule,
    NbActionsModule,
    NbEvaIconsModule,
    NbIconModule,
    NbUserModule,
    NbTreeGridModule,
    NbMenuModule,
    NbToastrModule,
    NbInputModule,
    NbSelectModule
  ],
  providers: [NbSidebarService, NbToastrService]
})
export class NbModule {
}
