import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorehouseComponent } from './storehouse.component';

describe('StorehouseComponent', () => {
  let component: StorehouseComponent;
  let fixture: ComponentFixture<StorehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
