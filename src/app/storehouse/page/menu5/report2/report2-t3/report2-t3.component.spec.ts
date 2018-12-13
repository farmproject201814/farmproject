import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report2T3Component } from './report2-t3.component';

describe('Report2T3Component', () => {
  let component: Report2T3Component;
  let fixture: ComponentFixture<Report2T3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report2T3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report2T3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
