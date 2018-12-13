import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report1T2Component } from './report1-t2.component';

describe('Report1T2Component', () => {
  let component: Report1T2Component;
  let fixture: ComponentFixture<Report1T2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report1T2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report1T2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
