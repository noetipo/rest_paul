import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SetupComponent} from './setup.component';
import {RolContainerComponent} from './rol-container/rol-container.component';
import {UserContainerComponent} from './user-container/user-container.component';
import {PersonContainerComponent} from './person-container/person-container.component';
import {UserRolComponent} from './user-container/components/user-rol/user-rol.component';
import {RolModuleComponent} from './rol-container/components/rol-module/rol-module.component';

const routes: Routes = [{
  path: '',
  component: SetupComponent,
  children: [{
    path: 'rol',
    component: RolContainerComponent,
  },
    {
      path: 'user',
      component: UserContainerComponent,
    },

    {
      path: 'user-rol/:id',
      component: UserRolComponent,
    },
    {
      path: 'rol-modulo/:id',
      component: RolModuleComponent,
    },
    {
      path: 'person',
      component: PersonContainerComponent,
    },

  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SetupRoutingModule {

}

export const routedComponents = [
  SetupComponent,
  RolContainerComponent,
  PersonContainerComponent,
  UserContainerComponent,
  UserRolComponent,
  RolModuleComponent,

];
