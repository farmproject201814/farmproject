import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreT5Component } from './store-t5.component';

describe('StoreT5Component', () => {
  let component: StoreT5Component;
  let fixture: ComponentFixture<StoreT5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreT5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreT5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
