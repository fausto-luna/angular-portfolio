import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderArtComponent } from './header-art.component';

describe('HeaderArtComponent', () => {
  let component: HeaderArtComponent;
  let fixture: ComponentFixture<HeaderArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
