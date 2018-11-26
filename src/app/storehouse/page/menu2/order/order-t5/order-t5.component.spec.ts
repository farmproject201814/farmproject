import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderT5Component } from './order-t5.component';

describe('OrderT5Component', () => {
  let component: OrderT5Component;
  let fixture: ComponentFixture<OrderT5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderT5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderT5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
