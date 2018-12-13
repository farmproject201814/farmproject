import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report2T4Component } from './report2-t4.component';

describe('Report2T4Component', () => {
  let component: Report2T4Component;
  let fixture: ComponentFixture<Report2T4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report2T4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report2T4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
