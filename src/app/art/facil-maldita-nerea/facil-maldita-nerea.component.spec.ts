import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilMalditaNereaComponent } from './facil-maldita-nerea.component';

describe('FacilMalditaNereaComponent', () => {
  let component: FacilMalditaNereaComponent;
  let fixture: ComponentFixture<FacilMalditaNereaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilMalditaNereaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilMalditaNereaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
