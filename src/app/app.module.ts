/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LocalStorageModule} from 'angular-2-local-storage';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ReniecSunatService} from './ReniecSunatService/reniec-sunat.service';
import {VentasStorageService} from './providers/ventasStorage.service';

import {
  PermisoGuardService,
  TokenInterceptorService,
  BusService,
  CatchInterceptorService, AuthGuardService,
} from './providers';
import {ThemeModule} from './@theme/theme.module';
import { PageComponent } from './page/page.component';
@NgModule({
  declarations: [AppComponent, PageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: 'ERPV',
      storageType: 'localStorage',
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    LocalStorageModule,
    VentasStorageService,
    AuthGuardService,
    BusService,
    PermisoGuardService,
    ReniecSunatService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatchInterceptorService,
      multi: true,
    },
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
