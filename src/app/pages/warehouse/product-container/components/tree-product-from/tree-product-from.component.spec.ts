import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeProductFromComponent } from './tree-product-from.component';

describe('TreeProductFromComponent', () => {
  let component: TreeProductFromComponent;
  let fixture: ComponentFixture<TreeProductFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeProductFromComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeProductFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
