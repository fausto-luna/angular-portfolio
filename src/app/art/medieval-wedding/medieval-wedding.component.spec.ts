import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedievalWeddingComponent } from './medieval-wedding.component';

describe('MedievalWeddingComponent', () => {
  let component: MedievalWeddingComponent;
  let fixture: ComponentFixture<MedievalWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedievalWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedievalWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
