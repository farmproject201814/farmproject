import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportT2Component } from './import-t2.component';

describe('ImportT2Component', () => {
  let component: ImportT2Component;
  let fixture: ComponentFixture<ImportT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
