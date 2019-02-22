import {Component, OnInit} from '@angular/core';
import {TreeNode, TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions} from 'angular-tree-component';
import {ProductService} from '../../../providers/services';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TreeProductFromComponent} from './components/tree-product-from/tree-product-from.component';
import {BodyOutputType, Toast, ToasterConfig, ToasterService} from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';
import {TreeProduct} from '../models/tree-product';
import {TreeProductEditfromComponent} from './components/tree-product-editfrom/tree-product-editfrom.component';

const actionMapping: IActionMapping = {
  mouse: {
    contextMenu: (tree, node, $event) => {
      $event.preventDefault();
      alert(`context menu for ${node.data.name}`);
    },
    dblClick: (tree, node, $event) => {
      if (node.hasChildren) {
        TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
      }
    },
    click: (tree, node, $event) => {
      $event.shiftKey
        ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
        : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);
    },
  },
  keys: {
    [KEYS.ENTER]: (tree, node) => alert(`This is ${node.data.name}`),
  },
};

@Component({
  selector: 'erpv-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss'],
})
export class ProductContainerComponent implements OnInit {
  public error: string;
  public nodes: any[];
  private treeProduct = new TreeProduct();
  customTemplateStringOptions: ITreeOptions = {
    isExpandedField: 'expanded',
    idField: 'uuid',

    actionMapping,
    nodeHeight: 23,

    useVirtualScroll: true,
    animateExpand: true,
  };
  config: ToasterConfig;

  position = 'toast-top-right';
  animationType = 'fade';
  timeout = 2000;
  toastsLimit = 3;
  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;

  constructor(private productService: ProductService,
              private modalService: NgbModal,
              private toasterService: ToasterService) {
  }

  private getProducts(): void {
    this.productService.getCategorysProductsTree$().subscribe(response => {
      this.nodes = response.data;
    }, error => {
      this.error = error;
    });
  }

  ngOnInit() {
    this.getProducts();
  }


  public childrenCount(node: TreeNode): string {
    return node && node.children ? `(${node.children.length})` : '';
  }

  public addNewChildTreeProduct($eventData: any): void {
    const treeProductFormModal = this.modalService.open(TreeProductFromComponent, {size: 'lg'});
    treeProductFormModal.componentInstance.onSaveTreeProductFormEmit.subscribe(($event) => {
      $event.alm_producto_nivel = $eventData.alm_producto_nivel + 1;
      $event.Parent_alm_producto_id = $eventData.alm_producto_id;
      this.saveTreeProduct($event);
      treeProductFormModal.close();

    });
    treeProductFormModal.componentInstance.onCancelTreeProductFormEmit.subscribe(($event) => {
      if ($event) {
        treeProductFormModal.close();
      }
    });

  }

  public openTreeProductForm(): void {
    const treeProductFormModal = this.modalService.open(TreeProductFromComponent, {size: 'lg'});
    treeProductFormModal.componentInstance.onSaveTreeProductFormEmit.subscribe(($event) => {
      $event.alm_producto_nivel = 1;
      this.saveTreeProduct($event);
      treeProductFormModal.close();

    });
    treeProductFormModal.componentInstance.onCancelTreeProductFormEmit.subscribe(($event) => {
      if ($event) {
        treeProductFormModal.close();
      }
    });

  }

  public editTreeProduct($eventData: any): void {
    this.productService.getCategoryProductTree$($eventData.alm_producto_id).subscribe(response => {
      this.treeProduct = response.data;
      const treeProductEditFormModal = this.modalService.open(TreeProductEditfromComponent, {size: 'lg'});
      treeProductEditFormModal.componentInstance.name = this.treeProduct;
      treeProductEditFormModal.componentInstance.onSaveTreeProductFormEmit.subscribe(($event) => {
        this.editSaveTreeProduct(this.treeProduct.alm_producto_id, $event);
        treeProductEditFormModal.close();

      });
      treeProductEditFormModal.componentInstance.onCancelTreeProductFormEmit.subscribe(($event) => {
        if ($event) {
          treeProductEditFormModal.close();
        }
      });
    }, error => {
      this.error = error;
    });

  }


  private saveTreeProduct(treeProduct: object): void {
    this.productService.postCategorysProductsTree$(treeProduct).subscribe(response => {
      if (response.success) {
        this.showToast('success', 'Se Registró!!', 'La Categoria/Producto');
        this.getProducts();
      }
    }, error => {
      this.showToast('error', 'No Se Registró!!', 'La Categoria/Producto');
      this.error = error;
    });

  }

  private editSaveTreeProduct(alm_producto_id: string, treeProduct: object): void {
    this.productService.putCategoryProductTree$(alm_producto_id, treeProduct).subscribe(response => {
      if (response.success) {
        this.getProducts();
      }
    }, error => {
      this.error = error;
    });

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
