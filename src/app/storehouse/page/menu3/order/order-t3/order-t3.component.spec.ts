import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderT3Component } from './order-t3.component';

describe('OrderT3Component', () => {
  let component: OrderT3Component;
  let fixture: ComponentFixture<OrderT3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderT3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderT3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
