import {Component, OnInit} from '@angular/core';
import {RolService} from '../../../providers/services/setup/rol/rol.service';
import {Rols} from './models/rol';
import {Rol} from './models/rol';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RolFormComponent} from './components/rol-form/rol-form.component';
import {RolEditFormComponent} from './components/rol-edit-form/rol-edit-form.component';
import {Router} from '@angular/router';
import {ToasterService, ToasterConfig, Toast, BodyOutputType} from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'erpv-rol',
  template: `
    <div class="row">
      <div class="col-lg-12">
        <nb-card>
          <toaster-container [toasterconfig]="config"></toaster-container>
          <nb-card-header>Roles
            <button class="btn btn-primary btn-sm btn-semi-round" (click)="openRolForm()">Nuevo Rol</button>
          </nb-card-header>
          <nb-card-body>
            <div class="container">
              <erpv-rol-list [rols]="rols" (onDeleteRol)="onDelete($event)"
                             (onEditRol)="onEdit($event)"
                             (onAddRolModuloEventEmitter)="onAddRolModulo($event)"></erpv-rol-list>
            </div>
          </nb-card-body>
        </nb-card>
      </div>
    </div>`,
  styleUrls: ['./rol-container.component.scss'],
})
export class RolContainerComponent implements OnInit {
  public error: string;
  public rols: Rols[];
  public rol = new Rol();


  config: ToasterConfig;

  position = 'toast-top-right';
  animationType = 'fade';
  timeout = 2000;
  toastsLimit = 3;
  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;

  constructor(private rolService: RolService, private modalService: NgbModal,
              private router: Router, private toasterService: ToasterService) {
  }

  ngOnInit() {
    this.getRoles();
  }

  public openRolForm() {
    const modalRef = this.modalService.open(RolFormComponent);
    modalRef.componentInstance.onSaveEmit.subscribe(($event) => {
      this.saveRol($event);
      modalRef.close();

    });
    modalRef.componentInstance.onCancelEmit.subscribe(($event) => {
      if ($event) {
        modalRef.close();
      }
    });
  }

  public getRoles(): void {
    this.rolService.getRoles$().subscribe(response => {
      this.rols = response.data;
    }, error => {

      this.error = error;
    });
  }

  public onDelete($event): void {
    this.rolService.deleteRol$($event.seg_rol_id).subscribe(response => {
      this.rols = response.data;
      this.showToast('success', 'Se Eliminó!!', $event.seg_rol_nombre);
    }, error => {
      this.error = error;
      this.showToast('error', 'No Se Eliminó!!', $event.seg_rol_nombre);
    });

  }

  public onEdit($event): void {
    this.rolService.getRol$($event.seg_rol_id).subscribe(response => {
      this.rol = response.data;
      const modalRolEdit = this.modalService.open(RolEditFormComponent);
      modalRolEdit.componentInstance.name = this.rol;
      modalRolEdit.componentInstance.editEmiter.subscribe(($eventEmiter) => {
        this.editRol($eventEmiter);

        modalRolEdit.close();
      });
      modalRolEdit.componentInstance.onCancelEditEmit.subscribe(($onCancelEditEmit) => {
        if ($onCancelEditEmit) {
          modalRolEdit.close();
        }
      });

    }, error => {
      this.error = error;
    });
  }


  public saveRol($event): void {
    this.rolService.postRol$($event).subscribe(response => {
      this.showToast('success', 'Se Registró!!', $event.seg_rol_nombre);
      this.getRoles();

    }, error => {
      this.showToast('error', 'No Se Registró!!', $event.seg_rol_nombre);
      this.error = error;
    });

  }

  public editRol($event): void {
    this.rolService.putRol$($event.seg_rol_id, $event).subscribe(response => {
      this.showToast('success', 'Se Editó!!', $event.seg_rol_nombre);
      this.rol = response.data;
      this.getRoles();
    }, error => {
      this.showToast('error', 'No Se Editó!!', $event.seg_rol_nombre);
      this.error = error;

    });


  }

  public onAddRolModulo($event): void {
    this.router.navigate(['pages/setup/rol-modulo', $event.seg_rol_id]);
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: this.position,
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      tapToDismiss: this.isHideOnClick,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animationType,
      limit: this.toastsLimit,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: this.timeout,
      showCloseButton: this.isCloseButton,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }
}

