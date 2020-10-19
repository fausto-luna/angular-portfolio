import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuzPrimeraComponent } from './luz-primera.component';

describe('FirstLightComponent', () => {
  let component: LuzPrimeraComponent;
  let fixture: ComponentFixture<LuzPrimeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuzPrimeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuzPrimeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
