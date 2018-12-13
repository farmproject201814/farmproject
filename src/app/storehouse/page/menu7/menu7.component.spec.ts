import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu7Component } from './menu7.component';

describe('Menu7Component', () => {
  let component: Menu7Component;
  let fixture: ComponentFixture<Menu7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
