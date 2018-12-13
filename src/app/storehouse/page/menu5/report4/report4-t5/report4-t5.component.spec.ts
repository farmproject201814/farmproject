import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report4T5Component } from './report4-t5.component';

describe('Report4T5Component', () => {
  let component: Report4T5Component;
  let fixture: ComponentFixture<Report4T5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report4T5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report4T5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
