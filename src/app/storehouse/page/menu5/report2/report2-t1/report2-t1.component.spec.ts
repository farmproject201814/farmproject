import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report2T1Component } from './report2-t1.component';

describe('Report2T1Component', () => {
  let component: Report2T1Component;
  let fixture: ComponentFixture<Report2T1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report2T1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report2T1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
