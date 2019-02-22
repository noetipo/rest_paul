import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolContainerComponent } from './rol-container.component';

describe('RolContainerComponent', () => {
  let component: RolContainerComponent;
  let fixture: ComponentFixture<RolContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolContainerComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
