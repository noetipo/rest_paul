import {Component, Input, OnInit} from '@angular/core';
import {NbMenuService, NbSidebarService} from '@nebular/theme';
import {AnalyticsService} from '../../../@core/utils/analytics.service';
import {LayoutService} from '../../../@core/data/layout.service';
import {VentasStorageService} from '../../../providers/ventasStorage.service';
import {AuthService} from '../../../providers/services';
import {Router} from '@angular/router';

@Component({
  selector: 'erpv-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;
  public error: string;

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService,
              private ventasStorageService: VentasStorageService,
              private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.user = this.ventasStorageService.getUserData();

  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  public logout(): void {
    this.authService.logoutBack$().subscribe(data => {
      if (data.success) {
        this.ventasStorageService.logout();
        this.goToUrl();
      }


    }, error => {

      this.error = error;
    });

  }

  goToUrl(): void {
    this.router.navigate(['auth/login']);
  }
}
