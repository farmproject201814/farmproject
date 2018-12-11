import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreT4Component } from './store-t4.component';

describe('StoreT4Component', () => {
  let component: StoreT4Component;
  let fixture: ComponentFixture<StoreT4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreT4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreT4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
