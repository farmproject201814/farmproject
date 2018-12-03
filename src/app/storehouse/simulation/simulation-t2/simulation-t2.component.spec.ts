import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationT2Component } from './simulation-t2.component';

describe('SimulationT2Component', () => {
  let component: SimulationT2Component;
  let fixture: ComponentFixture<SimulationT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulationT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
