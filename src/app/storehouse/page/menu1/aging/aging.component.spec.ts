import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgingComponent } from './aging.component';

describe('AgingComponent', () => {
  let component: AgingComponent;
  let fixture: ComponentFixture<AgingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
