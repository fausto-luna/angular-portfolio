import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighLandComponent } from './high-land.component';

describe('HighLandComponent', () => {
  let component: HighLandComponent;
  let fixture: ComponentFixture<HighLandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighLandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
