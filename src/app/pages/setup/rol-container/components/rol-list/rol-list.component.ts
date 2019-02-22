import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Rols} from '../../models/rol';

@Component({
  selector: 'erpv-rol-list',
  template: `
    <div class="card mb-3">
      <div class="card-header"><h5>Lista Roles</h5></div>
      <div class="card-body table-responsive">
        <table class="table table-bordered table-sm table-hover table-striped">
          <thead>
          <tr>
            <th>Rol Nombre</th>
            <th>Rol Estado</th>
            <th>Opciones</th>
          </tr>
          </thead>
          <tbody>
          <tr *ngFor="let rol of rols ">
            <td>{{rol.seg_rol_nombre}}</td>
            <td>{{rol.seg_rol_estado}}</td>
            <td>
              <div class="icon-button-examples">
                <button type="button" class="btn btn-outline-danger btn-icon" (click)="onDelete(rol)">
                  <i class="nb-trash"></i>
                </button>
                <button type="button" class="btn btn-outline-success btn-icon" (click)="editRol(rol)">
                  <i class="nb-compose"></i>
                </button>
                <button type="button" class="btn btn-outline-primary btn-icon" (click)="onAddRolModulo(rol)">
                  <i class="nb-gear"></i>
                </button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styleUrls: ['./rol-list.component.scss'],
})
export class RolListComponent implements OnInit {
  public trash: string = 'Borrar';
  public edit: string = 'Editar';
  @Input() rols: Rols[];
  @Output() onDeleteRol = new EventEmitter<object>();
  @Output() onEditRol = new EventEmitter<object>();
  @Output() onAddRolModuloEventEmitter = new EventEmitter<object>();

  constructor() {
  }

  ngOnInit() {
  }

  public onDelete($event: {}): void {
    this.onDeleteRol.emit($event);
  }

  public editRol($event: {}): void {
    this.onEditRol.emit($event);
  }

  public onAddRolModulo($event): void {
    this.onAddRolModuloEventEmitter.emit($event);

  }
}
