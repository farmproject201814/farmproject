import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationT2Component } from './notification-t2.component';

describe('NotificationT2Component', () => {
  let component: NotificationT2Component;
  let fixture: ComponentFixture<NotificationT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
