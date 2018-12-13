import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report4T2Component } from './report4-t2.component';

describe('Report4T2Component', () => {
  let component: Report4T2Component;
  let fixture: ComponentFixture<Report4T2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report4T2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report4T2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
