import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationT1Component } from './simulation-t1.component';

describe('SimulationT1Component', () => {
  let component: SimulationT1Component;
  let fixture: ComponentFixture<SimulationT1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulationT1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
