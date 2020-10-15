import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanteNoDecisivoComponent } from './instante-no-decisivo.component';

describe('InstanteNoDecisivoComponent', () => {
  let component: InstanteNoDecisivoComponent;
  let fixture: ComponentFixture<InstanteNoDecisivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanteNoDecisivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanteNoDecisivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
