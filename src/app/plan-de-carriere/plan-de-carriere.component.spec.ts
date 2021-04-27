import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDeCarriereComponent } from './plan-de-carriere.component';

describe('PlanDeCarriereComponent', () => {
  let component: PlanDeCarriereComponent;
  let fixture: ComponentFixture<PlanDeCarriereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanDeCarriereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDeCarriereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
