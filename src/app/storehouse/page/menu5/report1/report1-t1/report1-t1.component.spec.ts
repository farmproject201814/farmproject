import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report1T1Component } from './report1-t1.component';

describe('Report1T1Component', () => {
  let component: Report1T1Component;
  let fixture: ComponentFixture<Report1T1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report1T1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report1T1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
