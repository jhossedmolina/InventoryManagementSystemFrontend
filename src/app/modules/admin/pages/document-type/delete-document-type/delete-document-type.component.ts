import { Component, Inject, OnInit } from '@angular/core';
import { DocumentTypeService } from '../../../services/document-type/document-type.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-document-type',
  templateUrl: './delete-document-type.component.html',
  styleUrls: ['./delete-document-type.component.scss'],
})
export class DeleteDocumentTypeComponent implements OnInit {
  inputData: DocumentType | any;
  documentTypeName: string | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DocumentType,
    private ref: MatDialogRef<DeleteDocumentTypeComponent>,
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
      this.documentTypeName = item.name;
    });
  }

  deleteDocumentType() {
    this.documentTypeServ
      .deleteDocumentType(this.inputData.id)
      .subscribe((data) => {
        this.closeDialog();
        this.showSnackbar(
          `El Tipo De Documento ${this.documentTypeName} Se Ha Eliminado Correctamente`
        );
        window.location.reload();
      });
  }

  showSnackbar(message: string): void {
    this.snackbar.open(message, 'OK', {
      duration: 2500,
    });
  }

  closeDialog() {
    this.ref.close();
  }
}
