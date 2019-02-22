import {NgModule} from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import {ValidatorsService, ToolsService} from '../../providers';
import {ComponentsModule} from '../../shared/components/components.module';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ToasterModule} from 'angular2-toaster';
import {TreeModule} from 'angular-tree-component';
import {PartidaRoutingModule, routedComponents} from './partida-routing.module';
import {PresupuestoContainerComponent} from './presupuesto-container/presupuesto-container.component';
import {PartidaService} from '../../providers';
import {NgxPaginationModule} from 'ngx-pagination';
import { PartidaDetalleComponent } from './partida-detalle/partida-detalle.component';
const COMPONENTS: any = [
  PresupuestoContainerComponent,
];
const SERVICES: any = [
  ToolsService,
  ValidatorsService,
  NgbActiveModal,
  PartidaService,
];
const VENTAS_MODULES: any = [
  ThemeModule,
  TreeModule,
  PartidaRoutingModule,
  ComponentsModule,
  NgxPaginationModule,


];

const ENTRY_COMPONETS: any = [];

@NgModule({
  imports: [
    ...VENTAS_MODULES,
    ToasterModule.forRoot(),
  ],
  declarations: [
    ...routedComponents,
    ...COMPONENTS,
    PartidaDetalleComponent,

  ], providers: [...SERVICES,
  ], entryComponents: [...ENTRY_COMPONETS],
})
export class PartidaModule {
}
