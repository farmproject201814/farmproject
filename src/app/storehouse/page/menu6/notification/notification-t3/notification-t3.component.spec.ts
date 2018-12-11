import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationT3Component } from './notification-t3.component';

describe('NotificationT3Component', () => {
  let component: NotificationT3Component;
  let fixture: ComponentFixture<NotificationT3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationT3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationT3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
