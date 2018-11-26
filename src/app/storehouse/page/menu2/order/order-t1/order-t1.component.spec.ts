import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderT1Component } from './order-t1.component';

describe('OrderT1Component', () => {
  let component: OrderT1Component;
  let fixture: ComponentFixture<OrderT1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderT1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
