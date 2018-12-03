import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportT4Component } from './import-t4.component';

describe('ImportT4Component', () => {
  let component: ImportT4Component;
  let fixture: ComponentFixture<ImportT4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportT4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportT4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
