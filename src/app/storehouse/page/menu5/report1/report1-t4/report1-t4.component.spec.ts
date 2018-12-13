import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report1T4Component } from './report1-t4.component';

describe('Report1T4Component', () => {
  let component: Report1T4Component;
  let fixture: ComponentFixture<Report1T4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report1T4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report1T4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
