import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDocumentAdministratifComponent } from './info-document-administratif.component';

describe('InfoDocumentAdministratifComponent', () => {
  let component: InfoDocumentAdministratifComponent;
  let fixture: ComponentFixture<InfoDocumentAdministratifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoDocumentAdministratifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDocumentAdministratifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
