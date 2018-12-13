import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report4T4Component } from './report4-t4.component';

describe('Report4T4Component', () => {
  let component: Report4T4Component;
  let fixture: ComponentFixture<Report4T4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report4T4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report4T4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
