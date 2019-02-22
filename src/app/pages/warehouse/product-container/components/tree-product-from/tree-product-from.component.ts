import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'erpv-tree-product-from',
  templateUrl: './tree-product-from.component.html',
  styleUrls: ['./tree-product-from.component.scss'],
})
export class TreeProductFromComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

  @Output() onCancelTreeProductFormEmit = new EventEmitter<boolean>();
  @Output() onSaveTreeProductFormEmit = new EventEmitter<object>();
  public treeProductForm: FormGroup;

  ngOnInit() {
    this.treeProductForm = this.formBuilder.group({
      alm_producto_nombre: ['', [Validators.required, Validators.minLength(3)]],
      alm_producto_codigo: ['', [Validators.required, Validators.minLength(3)]],

    });
  }

  public saveTreeProductForm(): void {
    if (this.treeProductForm.valid) {
      this.onSaveTreeProductFormEmit.emit(this.treeProductForm.value);
      this.treeProductForm.reset(this.treeProductForm.value);
    }
  }

  public cancelTreeProductForm(): void {
    this.onCancelTreeProductFormEmit.emit(true);
    this.treeProductForm.reset(this.treeProductForm.value);

  }

}
