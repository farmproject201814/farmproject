import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumgradingComponent } from './sumgrading.component';

describe('SumgradingComponent', () => {
  let component: SumgradingComponent;
  let fixture: ComponentFixture<SumgradingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumgradingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumgradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
