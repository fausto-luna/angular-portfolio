import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackmoonComponent } from './blackmoon.component';

describe('BlackmoonComponent', () => {
  let component: BlackmoonComponent;
  let fixture: ComponentFixture<BlackmoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackmoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackmoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
