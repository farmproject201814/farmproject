import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationT4Component } from './notification-t4.component';

describe('NotificationT4Component', () => {
  let component: NotificationT4Component;
  let fixture: ComponentFixture<NotificationT4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationT4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationT4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
