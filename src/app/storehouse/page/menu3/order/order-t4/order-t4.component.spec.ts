import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderT4Component } from './order-t4.component';

describe('OrderT4Component', () => {
  let component: OrderT4Component;
  let fixture: ComponentFixture<OrderT4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderT4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderT4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
