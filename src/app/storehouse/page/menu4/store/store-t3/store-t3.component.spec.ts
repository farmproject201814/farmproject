import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreT3Component } from './store-t3.component';

describe('StoreT3Component', () => {
  let component: StoreT3Component;
  let fixture: ComponentFixture<StoreT3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreT3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreT3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
