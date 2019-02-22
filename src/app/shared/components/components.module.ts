import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormValidateErrorsComponent,
} from '.';
import { RouterModule } from '@angular/router';

const COMPONENTS: any = [
  FormValidateErrorsComponent,
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class ComponentsModule { }
