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
  NbToastrService,
  NbToastrModule,
  NbInputModule,
  NbSelectModule,
  NbTabsetModule,
  NbRadioComponent,
  NbRadioGroupComponent, NbRadioModule
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
    NbRadioModule,
    NbTabsetModule,
    NbTreeGridModule,
    NbMenuModule.forRoot(),
    NbToastrModule.forRoot(),
    NbInputModule,
    NbSelectModule,

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
    NbTabsetModule,
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
