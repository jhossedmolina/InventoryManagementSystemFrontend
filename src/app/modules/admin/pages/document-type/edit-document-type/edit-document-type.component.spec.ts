import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDocumentTypeComponent } from './edit-document-type.component';

describe('EditDocumentTypeComponent', () => {
  let component: EditDocumentTypeComponent;
  let fixture: ComponentFixture<EditDocumentTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDocumentTypeComponent]
    });
    fixture = TestBed.createComponent(EditDocumentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
