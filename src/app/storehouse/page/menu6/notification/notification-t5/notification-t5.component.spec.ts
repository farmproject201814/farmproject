import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationT5Component } from './notification-t5.component';

describe('NotificationT5Component', () => {
  let component: NotificationT5Component;
  let fixture: ComponentFixture<NotificationT5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationT5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationT5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
