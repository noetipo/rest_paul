import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoContainerComponent } from './presupuesto-container.component';

describe('PresupuestoContainerComponent', () => {
  let component: PresupuestoContainerComponent;
  let fixture: ComponentFixture<PresupuestoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresupuestoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresupuestoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
