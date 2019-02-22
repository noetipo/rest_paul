import {Component} from '@angular/core';
import {NbMenuItem} from '@nebular/theme';
import {UserMenuService} from '../providers/services';

@Component({
  selector: 'erpv-pages',
  template: `
    <erpv-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </erpv-sample-layout>
  `,
})
export class PagesComponent {
  public menu: NbMenuItem[] = [];
  public error: string;

  constructor(private userMenuService: UserMenuService) {
    this.userMenuService.getUserMenu$().subscribe(response => {
      this.menu = response.data;
    }, error => {
      this.error = error;
    });
  }
}
