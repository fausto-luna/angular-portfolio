import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricaDesitjosComponent } from './fabrica-desitjos.component';

describe('FabricaDesitjosComponent', () => {
  let component: FabricaDesitjosComponent;
  let fixture: ComponentFixture<FabricaDesitjosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricaDesitjosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricaDesitjosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
