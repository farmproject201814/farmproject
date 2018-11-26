import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportT5Component } from './import-t5.component';

describe('ImportT5Component', () => {
  let component: ImportT5Component;
  let fixture: ComponentFixture<ImportT5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportT5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportT5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
