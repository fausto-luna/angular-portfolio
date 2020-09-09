import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullmoonComponent } from './fullmoon.component';

describe('FullmoonComponent', () => {
  let component: FullmoonComponent;
  let fixture: ComponentFixture<FullmoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullmoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullmoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
