import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisWebComponent } from './this-web.component';

describe('ThisWebComponent', () => {
  let component: ThisWebComponent;
  let fixture: ComponentFixture<ThisWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
