import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeefgradingComponent } from './beefgrading.component';

describe('BeefgradingComponent', () => {
  let component: BeefgradingComponent;
  let fixture: ComponentFixture<BeefgradingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeefgradingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeefgradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
