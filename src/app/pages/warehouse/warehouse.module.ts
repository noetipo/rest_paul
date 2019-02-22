import {NgModule} from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import {WarehouseRoutingModule, routedComponents} from './warehouse-routing.module';
import {ValidatorsService, ToolsService} from '../../providers';
import {ComponentsModule} from '../../shared/components/components.module';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ToasterModule} from 'angular2-toaster';
import {ProductContainerComponent} from './product-container/product-container.component';
import {ProductService} from '../../providers';
import {TreeModule} from 'angular-tree-component';
import {TreeProductFromComponent} from './product-container/components/tree-product-from/tree-product-from.component';
import { TreeProductEditfromComponent,
} from './product-container/components/tree-product-editfrom/tree-product-editfrom.component';


const COMPONENTS: any = [
  ProductContainerComponent,
  TreeProductFromComponent,
  TreeProductEditfromComponent,
];
const SERVICES: any = [
  ToolsService,
  ValidatorsService,
  NgbActiveModal,
  ProductService,
];
const VENTAS_MODULES: any = [
  ThemeModule,
  TreeModule,
  WarehouseRoutingModule,
  ComponentsModule,



];

const ENTRY_COMPONETS: any = [
  TreeProductFromComponent,
  TreeProductEditfromComponent,
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
export class WarehouseModule {
}
