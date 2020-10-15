import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrecDifusorComponent } from './grec-difusor.component';

describe('GrecDifusorComponent', () => {
  let component: GrecDifusorComponent;
  let fixture: ComponentFixture<GrecDifusorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrecDifusorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrecDifusorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
