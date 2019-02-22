import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeProductEditfromComponent } from './tree-product-editfrom.component';

describe('TreeProductEditfromComponent', () => {
  let component: TreeProductEditfromComponent;
  let fixture: ComponentFixture<TreeProductEditfromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeProductEditfromComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeProductEditfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
