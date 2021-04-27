import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDocumentsComponent } from './liste-documents.component';

describe('ListeDocumentsComponent', () => {
  let component: ListeDocumentsComponent;
  let fixture: ComponentFixture<ListeDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
