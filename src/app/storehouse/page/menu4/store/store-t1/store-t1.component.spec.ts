import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreT1Component } from './store-t1.component';

describe('StoreT1Component', () => {
  let component: StoreT1Component;
  let fixture: ComponentFixture<StoreT1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreT1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
