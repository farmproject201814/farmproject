import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu6Component } from './menu6.component';

describe('Menu6Component', () => {
  let component: Menu6Component;
  let fixture: ComponentFixture<Menu6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
