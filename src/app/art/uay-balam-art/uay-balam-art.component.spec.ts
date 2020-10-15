import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UayBalamArtComponent } from './uay-balam-art.component';

describe('UayBalamArtComponent', () => {
  let component: UayBalamArtComponent;
  let fixture: ComponentFixture<UayBalamArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UayBalamArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UayBalamArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
