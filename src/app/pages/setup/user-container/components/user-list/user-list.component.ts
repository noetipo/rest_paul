import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Users} from '../../models/user';

@Component({
  selector: 'erpv-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input() users: Users[];
  @Output() onDeleteUSerEmit = new EventEmitter<object>();
  @Output() onEditUserEmit = new EventEmitter<object>();
  @Output() onAddUserRolEmit = new EventEmitter<object>();

  constructor() {
  }

  ngOnInit() {
  }

  public onDeleteUser(user: object): void {
    this.onDeleteUSerEmit.emit(user);
  }

  public onEditUser(user: object): void {
    this.onEditUserEmit.emit(user);
  }
  public onAddUserRol(user: object): void {
    this.onAddUserRolEmit.emit(user);
  }
}
