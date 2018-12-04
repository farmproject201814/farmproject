import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummedComponent } from './summed.component';

describe('SummedComponent', () => {
  let component: SummedComponent;
  let fixture: ComponentFixture<SummedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
