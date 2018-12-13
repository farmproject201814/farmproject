import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report3Component } from './report3.component';

describe('Report3Component', () => {
  let component: Report3Component;
  let fixture: ComponentFixture<Report3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
