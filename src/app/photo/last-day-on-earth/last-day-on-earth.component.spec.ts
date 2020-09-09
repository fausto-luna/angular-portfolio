import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastDayOnEarthComponent } from './last-day-on-earth.component';

describe('LastDayOnEarthComponent', () => {
  let component: LastDayOnEarthComponent;
  let fixture: ComponentFixture<LastDayOnEarthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastDayOnEarthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastDayOnEarthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
