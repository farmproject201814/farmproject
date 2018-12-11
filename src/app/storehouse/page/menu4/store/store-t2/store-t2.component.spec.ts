import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreT2Component } from './store-t2.component';

describe('StoreT2Component', () => {
  let component: StoreT2Component;
  let fixture: ComponentFixture<StoreT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
