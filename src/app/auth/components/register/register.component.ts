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

@Component({
  selector: 'erpv-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbRegisterComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  socialLinks: NbAuthSocialLink[] = [];
  registerUser: any = {};

  constructor(protected service: NbAuthService,
              @Inject(NB_AUTH_OPTIONS) protected options = {},
              protected cd: ChangeDetectorRef,
              protected router: Router, protected authService: AuthService) {

    this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
    this.showMessages = this.getConfigValue('forms.register.showMessages');
    this.strategy = this.getConfigValue('forms.register.strategy');
    this.socialLinks = this.getConfigValue('forms.login.socialLinks');
  }

  register(): void {

    this.registerUser.name = this.user.fullName;
    this.registerUser.email = this.user.email;
    this.registerUser.password = this.user.password;
    this.registerUser.c_password = this.user.password;
    this.authService.registerUser$(this.registerUser).subscribe(data => {
      setTimeout(() => {
        return this.router.navigateByUrl('auth/login');
      }, this.redirectDelay);

    });
    this.errors = this.messages = [];
    this.submitted = true;


  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}
