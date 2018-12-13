import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSettingComponent } from './all-setting.component';

describe('AllSettingComponent', () => {
  let component: AllSettingComponent;
  let fixture: ComponentFixture<AllSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
