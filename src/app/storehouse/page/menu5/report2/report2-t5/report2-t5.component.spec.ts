import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report2T5Component } from './report2-t5.component';

describe('Report2T5Component', () => {
  let component: Report2T5Component;
  let fixture: ComponentFixture<Report2T5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report2T5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report2T5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
