import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcattleComponent } from './addcattle.component';

describe('AddcattleComponent', () => {
  let component: AddcattleComponent;
  let fixture: ComponentFixture<AddcattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
