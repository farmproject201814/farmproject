import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationT3Component } from './simulation-t3.component';

describe('SimulationT3Component', () => {
  let component: SimulationT3Component;
  let fixture: ComponentFixture<SimulationT3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulationT3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationT3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
