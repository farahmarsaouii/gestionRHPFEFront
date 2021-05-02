import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeManagerComponent } from './equipe-manager.component';

describe('EquipeManagerComponent', () => {
  let component: EquipeManagerComponent;
  let fixture: ComponentFixture<EquipeManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipeManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
