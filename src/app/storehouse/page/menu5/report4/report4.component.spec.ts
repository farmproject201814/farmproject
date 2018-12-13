import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report4Component } from './report4.component';

describe('Report4Component', () => {
  let component: Report4Component;
  let fixture: ComponentFixture<Report4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
