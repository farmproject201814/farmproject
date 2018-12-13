import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report2T2Component } from './report2-t2.component';

describe('Report2T2Component', () => {
  let component: Report2T2Component;
  let fixture: ComponentFixture<Report2T2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report2T2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report2T2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
