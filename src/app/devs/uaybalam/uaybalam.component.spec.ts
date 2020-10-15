import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UaybalamComponent } from './uaybalam.component';

describe('UaybalamComponent', () => {
  let component: UaybalamComponent;
  let fixture: ComponentFixture<UaybalamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UaybalamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UaybalamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
