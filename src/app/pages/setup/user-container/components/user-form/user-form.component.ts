import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'erpv-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

  @Output() onCancelUserFormEmit = new EventEmitter<boolean>();
  @Output() onSaveUserFormEmit = new EventEmitter<object>();
  public userForm: FormGroup;

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      c_password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  public saveUserForm(): void {
    if (this.userForm.valid) {
      this.onSaveUserFormEmit.emit(this.userForm.value);
      this.userForm.reset(this.userForm.value);
    }
  }

  public cancelUserForm(): void {
    this.onCancelUserFormEmit.emit(true);
    this.userForm.reset(this.userForm.value);

  }
}
