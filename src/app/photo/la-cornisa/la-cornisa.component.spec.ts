import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaCornisaComponent } from './la-cornisa.component';

describe('LaCornisaComponent', () => {
  let component: LaCornisaComponent;
  let fixture: ComponentFixture<LaCornisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaCornisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaCornisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
