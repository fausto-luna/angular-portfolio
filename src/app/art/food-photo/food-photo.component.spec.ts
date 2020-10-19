import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPhotoComponent } from './food-photo.component';

describe('FoodPhotoComponent', () => {
  let component: FoodPhotoComponent;
  let fixture: ComponentFixture<FoodPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
