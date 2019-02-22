import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PartidaComponent} from './partida.component';
import {PresupuestoContainerComponent} from './presupuesto-container/presupuesto-container.component';
import {PartidaDetalleComponent} from './partida-detalle/partida-detalle.component';

const routes: Routes = [{
  path: '',
  component: PartidaComponent,
  children: [{
    path: 'presupuesto',
    component: PresupuestoContainerComponent,
  },

    {
      path: 'presupuesto/:id',
      component: PartidaDetalleComponent,
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
export class PartidaRoutingModule {

}

export const routedComponents = [
  PartidaComponent,
  PresupuestoContainerComponent,
  PartidaDetalleComponent,
];
