import {Component, OnInit, Input} from '@angular/core';
import {Persons} from '../../models/person';


@Component({
  selector: 'erpv-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent implements OnInit {
  @Input() persons: Persons[];
  p: any;

  constructor() {
  }

  ngOnInit() {
  }


  public onEditPerson(person: {}): void {
  }

  public onDeletePerson(person: {}): void {
  }
}
