import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMoonsComponent } from './navbar-moons.component';

describe('NavbarMoonsComponent', () => {
  let component: NavbarMoonsComponent;
  let fixture: ComponentFixture<NavbarMoonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarMoonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMoonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
