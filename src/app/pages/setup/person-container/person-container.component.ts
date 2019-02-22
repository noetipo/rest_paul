import {Component, OnInit} from '@angular/core';
import {PersonService} from '../../../providers/services/setup/person/person.service';
import {Persons} from './models/person';
import {ReniecSunatService} from '../../../ReniecSunatService/reniec-sunat.service';
import {PersonReniec} from './models/person';
import {Person} from './models/person';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidatorsService} from '../../../providers';
import {PersonFormComponent} from './components/person-form/person-form.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'erpv-person-container',
  templateUrl: './person-container.component.html',
  styleUrls: ['./person-container.component.scss'],
})
export class PersonContainerComponent implements OnInit {
  public error: string;

  public persons: Persons[];
  personSearchForm: FormGroup;

  public personReniec = new PersonReniec();
  public person = new Person();

  constructor(private personService: PersonService,
              private reniecSunatService: ReniecSunatService,
              private formBuilder: FormBuilder,
              private validatorsService: ValidatorsService,
              private modalService: NgbModal) {

  }

  ngOnInit() {
    this.personSearchForm = this.formBuilder.group({
      dni: ['', [Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        this.validatorsService.number]],
    });
    this.getPersons();
  }

  public getPersons(): void {
    this.personService.getPersons$().subscribe(response => {
      this.persons = response.data;
    }, error => {
      this.error = error;

    });
  }

  public SearchForm(): void {
    this.getPerson();
  }

  public cancelForm(): void {
    this.personSearchForm.reset(this.personSearchForm.value.dni);
  }

  public getPerson(): void {
    if (this.personSearchForm.valid) {
      this.personService.getPersonByDni$(this.personSearchForm.value.dni).subscribe(response => {
        if (response.success) {
          this.person = response.data;
          const modalPersonEdit = this.modalService.open(PersonFormComponent);
          modalPersonEdit.componentInstance.name = this.person;
          modalPersonEdit.componentInstance.onPersonSaveEmit.subscribe(($eventEmiter) => {
            this.onSavePersonForm($eventEmiter);
            modalPersonEdit.close();
          });

          modalPersonEdit.componentInstance.onPersonCancelEmit.subscribe(($onCancelEditEmit) => {
            if ($onCancelEditEmit) {
              modalPersonEdit.close();
            }
          });
        } else {
          this.reniecSunatService.getPersonReniec$(this.personSearchForm.value).subscribe(data => {
            this.personReniec = data;
            this.person.seg_per_nombres = this.personReniec.nombres;
            this.person.seg_per_dni = parseInt(this.personReniec.dni, 10);
            this.person.seg_per_apellido_paterno = this.personReniec.apellido_paterno;
            this.person.seg_per_apellido_materno = this.personReniec.apellido_materno;
            this.postPerson(this.person);
          }, error => {
            this.error = error;

          });

        }
      }, error => {
        this.error = error;
      });
    }
  }

  public onSavePersonForm($event): void {
    this.personService.putPerson$(this.person.seg_persona_id, $event).subscribe(response => {
      this.persons = response.data;

    }, error => {
      this.error = error;
    });

  }

  private postPerson(sendData: {}): void {
    this.personService.postPerson$(sendData).subscribe(response => {
      this.person = response.data;
      this.getPersons();
      this.getPerson();
    }, error => {
      this.error = error;
    });
  }

}
