import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DocumentTypeService } from '../../../services/document-type/document-type.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-document-type',
  templateUrl: './edit-document-type.component.html',
  styleUrls: ['./edit-document-type.component.scss'],
})
export class EditDocumentTypeComponent implements OnInit {
  inputData: DocumentType | any;
  editData: DocumentType | any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DocumentType,
    private ref: MatDialogRef<EditDocumentTypeComponent>,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private documentTypeServ: DocumentTypeService
  ) {}

  ngOnInit(): void {
    this.inputData = this.data;
    if (this.inputData.id > 0) {
      this.setDialogData(this.inputData.id);
    }
  }

  setDialogData(id: number) {
    console.log(id);
    this.documentTypeServ.getDocumentTypeById(id).subscribe((item) => {
      this.editData = item;
      this.editDocumentTypeForm.setValue({
        code: this.editData.code,
        name: this.editData.name,
      });
    });
  }

  closeDialog() {
    this.ref.close();
  }

  editDocumentTypeForm = this.fb.group({
    code: ['', Validators.nullValidator],
    name: ['', Validators.nullValidator],
  });

  get currentDocumentType(): DocumentType {
    const documentType = this.editDocumentTypeForm.value as DocumentType;
    return documentType;
  }

  saveChanges() {
    this.documentTypeServ
      .updateDocumentType(this.inputData.id, this.currentDocumentType)
      .subscribe((data) => {
        this.closeDialog();
        this.showSnackbar(
          `El Tipo De Documento ${data.name} Se Ha Actualizado Correctamente`
        );
        window.location.reload();
      });
  }

  showSnackbar(message: string): void {
    this.snackbar.open(message, 'OK', {
      duration: 2500,
    });
  }
}
