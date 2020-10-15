import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViokoComponent } from './vioko.component';

describe('ViokoComponent', () => {
  let component: ViokoComponent;
  let fixture: ComponentFixture<ViokoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViokoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViokoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
