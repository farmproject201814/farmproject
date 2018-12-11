import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotigradeComponent } from './notigrade.component';

describe('NotigradeComponent', () => {
  let component: NotigradeComponent;
  let fixture: ComponentFixture<NotigradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotigradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotigradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
