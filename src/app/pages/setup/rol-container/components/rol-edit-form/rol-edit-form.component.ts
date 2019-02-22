import {Component, EventEmitter, Input, Output,  OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Rol} from '../../models/rol';

@Component({
  selector: 'erpv-rol-edit-form',
  templateUrl: './rol-edit-form.component.html',
  styleUrls: ['./rol-edit-form.component.scss'],
})
export class RolEditFormComponent implements OnInit {
  rolForm: FormGroup;
  @Input() name = new Rol();
  @Output() onCancelEditEmit = new EventEmitter<boolean>();
  @Output() editEmiter = new EventEmitter<object>();

  @Input('value') _value = true;
  onChange: any = () => {};
  onTouched: any = () => {};

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  ngOnInit() {
    this._value = this.getBooleanState(this.name.seg_rol_estado);
    this.rolForm.patchValue({
      rol_nombre: this.name.seg_rol_nombre,
    });

  }

  switch() {
    this.value = !this.value;

  }


  private getIntState(data: boolean): number {
    if (data) {
      return 1;
    } else {
      return 0;
    }
  }

  private getBooleanState(data: number): boolean {
    if (data === 1) {
      return true;
    } else {

      return false;
    }

  }

  constructor(private formBuilder: FormBuilder) {
    this.rolForm = this.formBuilder.group({
      rol_nombre: ['', [Validators.required]],
      rol_estado: [''],
    });


  }


  public cancelForm(): void {
    this.rolForm.reset();
    this.onCancelEditEmit.emit(true);
    }

  public editForm(): void {
    this.name.seg_rol_nombre = this.rolForm.value.rol_nombre;
    this.name.seg_rol_estado = this.getIntState(this.value);
    this.editEmiter.emit(this.name);
  }


}
