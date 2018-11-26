import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderT2Component } from './order-t2.component';

describe('OrderT2Component', () => {
  let component: OrderT2Component;
  let fixture: ComponentFixture<OrderT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
