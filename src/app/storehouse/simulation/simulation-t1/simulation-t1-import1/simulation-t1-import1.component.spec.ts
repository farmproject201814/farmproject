import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationT1Import1Component } from './simulation-t1-import1.component';

describe('SimulationT1Import1Component', () => {
  let component: SimulationT1Import1Component;
  let fixture: ComponentFixture<SimulationT1Import1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulationT1Import1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationT1Import1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
