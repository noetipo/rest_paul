import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../providers/services';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Users, User} from './models/user';
import {UserFormComponent} from './components/user-form/user-form.component';
import {Router} from '@angular/router';

@Component({
  selector: 'erpv-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss'],
})
export class UserContainerComponent implements OnInit {
  public error: string;
  public users: Users[];
  public user = new User();

  constructor(private userService: UserService, private modalService: NgbModal, private router: Router) {
  }

  ngOnInit() {
    this.geUsers();
  }

  public geUsers(): void {
    this.userService.getUsers$().subscribe(response => {
      this.users = response.data;
    }, error => {

      this.error = error;
    });
  }


  public openUserForm() {
    const userFormModal = this.modalService.open(UserFormComponent);
    userFormModal.componentInstance.onSaveUserFormEmit.subscribe(($event) => {
      this.saveUser($event);
      userFormModal.close();

    });
    userFormModal.componentInstance.onCancelUserFormEmit.subscribe(($event) => {
      if ($event) {
        userFormModal.close();
      }
    });
  }

  private saveUser(user: object): void {
    this.userService.postUser$(user).subscribe(response => {
      this.geUsers();
    }, error => {
      this.error = error;
    });
  }

  public onAddUserRol($event): void {
    this.router.navigate(['pages/setup/user-rol', $event.id]);
  }

}
