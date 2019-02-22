import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolEditFormComponent } from './rol-edit-form.component';

describe('RolEditFormComponent', () => {
  let component: RolEditFormComponent;
  let fixture: ComponentFixture<RolEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolEditFormComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
