import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDevsComponent } from './header-devs.component';

describe('HeaderDevsComponent', () => {
  let component: HeaderDevsComponent;
  let fixture: ComponentFixture<HeaderDevsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDevsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
