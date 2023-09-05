import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DocumentTypeService } from '../../../services/document-type/document-type.service';
import { DocumentType } from '../../../interfaces/document-type';

@Component({
  selector: 'app-add-document-type',
  templateUrl: './add-document-type.component.html',
  styleUrls: ['./add-document-type.component.scss'],
})
export class AddDocumentTypeComponent {
  constructor(
    private documentTypeServ: DocumentTypeService,
    private fb: FormBuilder
  ) {}

  documentTypeForm = this.fb.group({
    code: ['', Validators.nullValidator],
    name: ['', Validators.nullValidator],
  });

  get currentDocumentType(): DocumentType {
    const documentType = this.documentTypeForm.value as DocumentType;
    return documentType;
  }

  createDocumentTye() {
    this.documentTypeServ
      .createDocumentType(this.currentDocumentType)
      .subscribe((data) => console.log(data));
    window.location.reload();
  }
}
