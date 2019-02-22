import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TreeProduct} from '../../../models/tree-product';

@Component({
  selector: 'erpv-tree-product-editfrom',
  templateUrl: './tree-product-editfrom.component.html',
  styleUrls: ['./tree-product-editfrom.component.scss'],
})
export class TreeProductEditfromComponent implements OnInit {
  treeProductForm: FormGroup;
  @Input() name = new TreeProduct();
  @Output() onCancelTreeProductFormEmit = new EventEmitter<boolean>();
  @Output() onSaveTreeProductFormEmit = new EventEmitter<object>();

  constructor(private formBuilder: FormBuilder) {
    this.treeProductForm = this.formBuilder.group({
      alm_producto_nombre: ['', [Validators.required, Validators.minLength(3)]],
      alm_producto_codigo: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit() {
    this.treeProductForm.patchValue({
      alm_producto_nombre: this.name.alm_producto_nombre,
      alm_producto_codigo: this.name.alm_producto_codigo,
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
