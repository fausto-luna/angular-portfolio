import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPhotoComponent } from './header-photo.component';

describe('HeaderPhotoComponent', () => {
  let component: HeaderPhotoComponent;
  let fixture: ComponentFixture<HeaderPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
