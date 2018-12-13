import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report4T3Component } from './report4-t3.component';

describe('Report4T3Component', () => {
  let component: Report4T3Component;
  let fixture: ComponentFixture<Report4T3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report4T3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report4T3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
