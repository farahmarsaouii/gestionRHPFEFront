import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDeCarriereUserComponent } from './plan-de-carriere-user.component';

describe('PlanDeCarriereUserComponent', () => {
  let component: PlanDeCarriereUserComponent;
  let fixture: ComponentFixture<PlanDeCarriereUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanDeCarriereUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDeCarriereUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
