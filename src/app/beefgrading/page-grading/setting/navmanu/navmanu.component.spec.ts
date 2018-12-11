import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavmanuComponent } from './navmanu.component';

describe('NavmanuComponent', () => {
  let component: NavmanuComponent;
  let fixture: ComponentFixture<NavmanuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavmanuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavmanuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
