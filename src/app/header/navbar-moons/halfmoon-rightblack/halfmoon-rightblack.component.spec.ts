import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfmoonRightblackComponent } from './halfmoon-rightblack.component';

describe('HalfmoonRightblackComponent', () => {
  let component: HalfmoonRightblackComponent;
  let fixture: ComponentFixture<HalfmoonRightblackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfmoonRightblackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfmoonRightblackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
