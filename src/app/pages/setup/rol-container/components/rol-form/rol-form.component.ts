import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'erpv-rol-form',
  templateUrl: './rol-form.component.html',
  styleUrls: ['./rol-form.component.scss'],
})
export class RolFormComponent implements OnInit {
  rolForm: FormGroup;
  public cancel: string = 'Cancelar';

  @Output() onCancelEmit = new EventEmitter<boolean>();
  @Output() onSaveEmit = new EventEmitter<object>();

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.rolForm = this.formBuilder.group({
      seg_rol_nombre: ['', [Validators.required]],
    });
  }


  public saveForm(): void {
    if (this.rolForm.valid) {
      this.onSaveEmit.emit(this.rolForm.value);
      this.rolForm.reset(this.rolForm.value.seg_rol_nombre);
    }
  }

  public cancelForm(): void {
    this.rolForm.reset();
    this.onCancelEmit.emit(true);
  }
}
