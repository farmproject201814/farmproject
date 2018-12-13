import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report1T3Component } from './report1-t3.component';

describe('Report1T3Component', () => {
  let component: Report1T3Component;
  let fixture: ComponentFixture<Report1T3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report1T3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report1T3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
