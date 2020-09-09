import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfmoonLeftblackComponent } from './halfmoon-leftblack.component';

describe('HalfmoonLeftblackComponent', () => {
  let component: HalfmoonLeftblackComponent;
  let fixture: ComponentFixture<HalfmoonLeftblackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfmoonLeftblackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfmoonLeftblackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
