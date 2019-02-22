/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {NB_AUTH_OPTIONS, NbAuthSocialLink} from '../../auth.options';
import {getDeepFromObject} from '../../helpers';

import {NbAuthService} from '../../services/auth.service';

import {AuthService} from '../../../providers/services';
import {VentasStorageService} from '../../../providers/ventasStorage.service';

@Component({
  selector: 'erpv-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbLoginComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;
  socialLinks: NbAuthSocialLink[] = [];
  rememberMe = false;
  private userData: any = {};

  private token: string;

  constructor(protected service: NbAuthService,
              @Inject(NB_AUTH_OPTIONS) protected options = {},
              protected cd: ChangeDetectorRef,
              protected router: Router, private authService: AuthService,
              private ventasStorageService: VentasStorageService) {

    this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
    this.showMessages = this.getConfigValue('forms.login.showMessages');
    this.strategy = this.getConfigValue('forms.login.strategy');
    this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    this.rememberMe = this.getConfigValue('forms.login.rememberMe');

    if (this.ventasStorageService.getToken()) {
      const url = this.authService.getRedirectUrl();
      this.goToUrl(url);
    }
  }

  login(): void {
    this.authService.authenticate$(this.user).subscribe(data => {
      this.token = data.success.token;
      this.ventasStorageService.setToken(this.token);
      this.authService.userDetail$(this.user).subscribe(response => {
        this.userData.name = response.success.name;
        this.userData.email = response.success.email;
        this.ventasStorageService.setUserData(this.userData);
        const url = this.authService.getRedirectUrl();
        this.goToUrl(url);
      });
    });
  }

  goToUrl(url): void {
    this.router.navigate([url]);
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}
