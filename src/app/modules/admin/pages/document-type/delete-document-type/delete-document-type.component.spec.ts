import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDocumentTypeComponent } from './delete-document-type.component';

describe('DeleteDocumentTypeComponent', () => {
  let component: DeleteDocumentTypeComponent;
  let fixture: ComponentFixture<DeleteDocumentTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteDocumentTypeComponent]
    });
    fixture = TestBed.createComponent(DeleteDocumentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
