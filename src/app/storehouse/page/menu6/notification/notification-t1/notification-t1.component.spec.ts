import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationT1Component } from './notification-t1.component';

describe('NotificationT1Component', () => {
  let component: NotificationT1Component;
  let fixture: ComponentFixture<NotificationT1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationT1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
