import {NgModule} from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import {SetupRoutingModule, routedComponents} from './setup-routing.module';
import {RolListComponent} from './rol-container/components/rol-list/rol-list.component';
import {RolFormComponent} from './rol-container/components/rol-form/rol-form.component';
import {ValidatorsService, ToolsService} from '../../providers';
import {ComponentsModule} from '../../shared/components/components.module';
import {RolEditFormComponent} from './rol-container/components/rol-edit-form/rol-edit-form.component';
import {PersonContainerComponent} from './person-container/person-container.component';
import {PersonListComponent} from './person-container/components/person-list/person-list.component';
import {PersonFormComponent} from './person-container/components/person-form/person-form.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {UserContainerComponent} from './user-container/user-container.component';
import {ToasterModule} from 'angular2-toaster';
import {
  UserService,
  RolService,
  PersonService,
  UserRolService,
  ModulService,
  RolModuleService,
} from '../../providers';
import {UserListComponent} from './user-container/components/user-list/user-list.component';
import {UserFormComponent} from './user-container/components/user-form/user-form.component';
import {UserRolComponent} from './user-container/components/user-rol/user-rol.component';
import {RolModuleComponent} from './rol-container/components/rol-module/rol-module.component';



const COMPONENTS: any = [
  RolListComponent,
  RolFormComponent,
  RolEditFormComponent,
  PersonContainerComponent,
  PersonListComponent,
  PersonFormComponent,
  UserContainerComponent,
  UserListComponent,
  UserFormComponent,
  UserRolComponent,
  RolModuleComponent,

];
const SERVICES: any = [
  ToolsService,
  ValidatorsService,
  RolService,
  UserService,
  PersonService,
  UserRolService,
  ModulService,
  RolModuleService,

  NgbActiveModal,
];
const VENTAS_MODULES: any = [
  ThemeModule,
  SetupRoutingModule,
  ComponentsModule,
  NgxPaginationModule,


];

const ENTRY_COMPONETS: any = [
  RolFormComponent,
  RolEditFormComponent,
  UserFormComponent,
  PersonFormComponent,

];

@NgModule({
  imports: [
    ...VENTAS_MODULES,
    ToasterModule.forRoot(),
  ],
  declarations: [
    ...routedComponents,
    ...COMPONENTS,


  ], providers: [...SERVICES,
  ], entryComponents: [...ENTRY_COMPONETS],
})
export class SetupModule {
}
