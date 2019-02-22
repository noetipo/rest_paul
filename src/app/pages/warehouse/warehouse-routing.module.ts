import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WarehouseComponent} from './warehouse.component';
import {ProductContainerComponent} from './product-container/product-container.component';

const routes: Routes = [{
  path: '',
  component: WarehouseComponent,
  children: [{
    path: 'product',
    component: ProductContainerComponent,
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
export class WarehouseRoutingModule {

}

export const routedComponents = [
  WarehouseComponent,
  ProductContainerComponent,
];
