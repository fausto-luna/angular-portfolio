import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishRevolutionComponent } from './spanish-revolution.component';

describe('SpanishRevolutionComponent', () => {
  let component: SpanishRevolutionComponent;
  let fixture: ComponentFixture<SpanishRevolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanishRevolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishRevolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
