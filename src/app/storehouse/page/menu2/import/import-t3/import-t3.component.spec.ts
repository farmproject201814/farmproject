import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportT3Component } from './import-t3.component';

describe('ImportT3Component', () => {
  let component: ImportT3Component;
  let fixture: ComponentFixture<ImportT3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportT3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportT3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
