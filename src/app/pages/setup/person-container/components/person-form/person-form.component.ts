import {Component, EventEmitter, Input, Output,  OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Person} from '../../models/person';

@Component({
  selector: 'erpv-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
})
export class PersonFormComponent implements OnInit {
  @Input() name = new Person();
  @Output() onPersonSaveEmit = new EventEmitter<object>();
  @Output() onPersonCancelEmit = new EventEmitter<boolean>();
  personForm: FormGroup;
  p: number = 1;
  constructor(private formBuilder: FormBuilder) {
    this.personForm = this.formBuilder.group({
      seg_per_nombres: ['', [Validators.required]],
      seg_per_apellido_paterno: ['', [Validators.required]],
      seg_per_apellido_materno: ['', [Validators.required]],
      seg_per_dni: ['', [Validators.required]],
      seg_per_telefono: [''],
      seg_per_direccion: [''],
      seg_per_email: [''],
      user_id: [''],
    });

  }
  ngOnInit() {
    this.personForm.patchValue({
      seg_per_nombres: this.name.seg_per_nombres,
      seg_per_apellido_paterno: this.name.seg_per_apellido_paterno,
      seg_per_apellido_materno: this.name.seg_per_apellido_materno,
      seg_per_dni: this.name.seg_per_dni,
      seg_per_telefono: this.name.seg_per_telefono,
      seg_per_direccion: this.name.seg_per_direccion,
      seg_per_email: this.name.seg_per_email,
      user_id: this.name.user_id,
    });
  }
  public savePersonForm(): void {

    if (this.personForm.valid) {
      this.onPersonSaveEmit.emit(this.personForm.value);
    }

  }

  public cancelPersonForm(): void {
    this.onPersonCancelEmit.emit(true);
  }


}
