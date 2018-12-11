import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcattleComponent } from './aboutcattle.component';

describe('AboutcattleComponent', () => {
  let component: AboutcattleComponent;
  let fixture: ComponentFixture<AboutcattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutcattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutcattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
