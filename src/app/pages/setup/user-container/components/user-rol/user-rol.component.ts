import {Component, OnInit} from '@angular/core';
import {UserRolService} from '../../../../../providers/services';
import {Router, ActivatedRoute} from '@angular/router';


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
  selector: 'erpv-user-rol',
  templateUrl: './user-rol.component.html',
  styleUrls: ['./user-rol.component.scss'],
})
export class UserRolComponent implements OnInit {
  public idUser: string;
  public error: string;
  public checklist: any;
  private arrayRoles: any[] = [];
  listItem: any;
  listItems: any;

  constructor(protected userRolService: UserRolService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.idUser = params['id'];
        this.getRols(this.idUser);


      }
    });
  }

  private getRols(id: string): void {
    this.userRolService.getRolUser$(id).subscribe(response => {
        this.generateListChecks(response.data);
        this.checklist = [];
        this.checklist = this.listItem.listItems;
      }, error => {
        this.error = error;
      },
    );
  }


  private generateListChecks(array: any): List[] {
    const Obj = {list: array};
    const list = [];
    for (const name of ['list']) {
      this.listItem = new List(name, []);
      for (const item of Obj[name]) {
        this.listItem.listItems.push(new ListItem(item.seg_rol_id, item.seg_rol_nombre, item.asignado));
      }
      list.push(this.listItem);

    }
    return this.listItem;
  }


  public saveUserRol(): void {
    this.arrayRoles = [];
    this.listItem.listItems.forEach(array => {
      if (array.checked === true) {
        this.arrayRoles.push(array.id);
      }
    });
    const data: any = {};
    data.seg_rol_id = this.arrayRoles;
    data.user_id = this.idUser;
    this.userRolService.posRolUser$(data).subscribe(response => {
      this.router.navigateByUrl('pages/setup/user');
    }, error => {
      this.error = error;
    });
  }

  public backUserRol(): void {
    this.router.navigateByUrl('pages/setup/user');
  }
}

