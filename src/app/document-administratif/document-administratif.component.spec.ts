import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentAdministratifComponent } from './document-administratif.component';

describe('DocumentAdministratifComponent', () => {
  let component: DocumentAdministratifComponent;
  let fixture: ComponentFixture<DocumentAdministratifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentAdministratifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentAdministratifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
