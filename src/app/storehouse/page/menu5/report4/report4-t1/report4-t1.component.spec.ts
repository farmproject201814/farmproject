import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report4T1Component } from './report4-t1.component';

describe('Report4T1Component', () => {
  let component: Report4T1Component;
  let fixture: ComponentFixture<Report4T1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report4T1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report4T1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
