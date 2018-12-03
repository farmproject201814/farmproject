import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportT1Component } from './import-t1.component';

describe('ImportT1Component', () => {
  let component: ImportT1Component;
  let fixture: ComponentFixture<ImportT1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportT1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
