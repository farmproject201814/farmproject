import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu5Component } from './menu5.component';

describe('Menu5Component', () => {
  let component: Menu5Component;
  let fixture: ComponentFixture<Menu5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
