import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonContainerComponent } from './person-container.component';

describe('PersonContainerComponent', () => {
  let component: PersonContainerComponent;
  let fixture: ComponentFixture<PersonContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonContainerComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
