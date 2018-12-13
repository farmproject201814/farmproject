import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report1T5Component } from './report1-t5.component';

describe('Report1T5Component', () => {
  let component: Report1T5Component;
  let fixture: ComponentFixture<Report1T5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report1T5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report1T5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
