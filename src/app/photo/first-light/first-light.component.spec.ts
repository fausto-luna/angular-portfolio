import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLightComponent } from './first-light.component';

describe('FirstLightComponent', () => {
  let component: FirstLightComponent;
  let fixture: ComponentFixture<FirstLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
