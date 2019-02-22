import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModulService} from '../../../../../providers/services';
import {RolModuleService} from '../../../../../providers/services';
import {ModulParent} from '../../models/modul';
import {ToasterService, ToasterConfig, Toast, BodyOutputType} from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';

class ListItem {
  constructor(public id: number,
              public name: string,
              public checked: boolean) {
  }
}

class List {
  constructor(public category: string,
              public listItems: ListItem[]) {
  }
}

@Component({
  selector: 'erpv-rol-module',
  templateUrl: './rol-module.component.html',
  styleUrls: ['./rol-module.component.scss'],
})
export class RolModuleComponent implements OnInit {
  private idRol: string;
  public error: string;
  public checklist: any;
  public modulParents: ModulParent[];
  private parenteMudul: string;
  private arrayModules: any[] = [];

  listItem: any;
  filterModulForm: FormGroup;


  config: ToasterConfig;

  position = 'toast-top-right';
  animationType = 'fade';
  timeout = 2000;
  toastsLimit = 3;
  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;

  constructor(private modulService: ModulService,
              private rolModuleService: RolModuleService,
              private router: Router,
              private route: ActivatedRoute, private formBuilder: FormBuilder, private toasterService: ToasterService) {
  }

  ngOnInit() {
    this.filterModulForm = this.formBuilder.group({
      module: ['', [Validators.required]],
    });

    this.filterModulForm.controls['module'].valueChanges
      .subscribe((selectedOptions) => {
        if (selectedOptions)
          this.parenteMudul = selectedOptions;
        this.getRolModule(selectedOptions);
      });
    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.idRol = params['id'];
      }
    });
    this.getModuls();
  }

  public getModuls(): void {
    this.modulService.getModulsParent$().subscribe(response => {
      this.modulParents = response.data;
      this.parenteMudul = this.modulParents[0].seg_modulo_id;
      this.filterModulForm.patchValue({
        module: this.parenteMudul,
      });
      this.getRolModule(this.parenteMudul);
    }, error => {
      this.error = error;
    });
  }

  private getRolModule(seg_modulo_id: string): void {
    const params: any = {};
    params.seg_rol_id = this.idRol;
    params.seg_modulo_id = seg_modulo_id;
    this.rolModuleService.getRolModule$(params).subscribe(response => {
      this.generateListChecks(response.data);
      this.checklist = [];
      this.checklist = this.listItem.listItems;
    }, error => {
      this.error = error;
    });
  }


  private generateListChecks(array: any): List[] {
    const Obj = {list: array};
    const list = [];
    for (const name of ['list']) {
      this.listItem = new List(name, []);
      for (const item of Obj[name]) {
        this.listItem.listItems.push(new ListItem(item.seg_modulo_id, item.seg_modulo_nombre, item.asignado));
      }
      list.push(this.listItem);

    }
    return this.listItem;
  }


  public backRolModule(): void {
    this.router.navigateByUrl('pages/setup/rol');
  }

  public saveRolModule(): void {
    this.arrayModules = [];
    this.listItem.listItems.forEach(array => {
      if (array.checked === true) {
        this.arrayModules.push(array.id);
      }
    });
    const data: any = {};
    data.seg_rol_id = this.idRol;
    data.seg_modulo_id = this.arrayModules;
    data.Parent_seg_modulo_id = this.parenteMudul;
    this.rolModuleService.posRolModule$(data).subscribe(response => {
      this.showToast('success', 'Se Actualizó!!', 'Roles al Usuario');
      this.router.navigateByUrl('pages/setup/rol');
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
