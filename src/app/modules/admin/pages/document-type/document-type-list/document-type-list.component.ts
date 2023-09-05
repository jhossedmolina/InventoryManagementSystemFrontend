import { Component, OnInit } from '@angular/core';
import { DocumentTypeService } from '../../../services/document-type/document-type.service';
import { DocumentType } from '../../../interfaces/document-type';
import { MatDialog } from '@angular/material/dialog';
import { EditDocumentTypeComponent } from '../edit-document-type/edit-document-type.component';
import { DeleteDocumentTypeComponent } from '../delete-document-type/delete-document-type.component';

@Component({
  selector: 'app-document-type-list',
  templateUrl: './document-type-list.component.html',
  styleUrls: ['./document-type-list.component.scss'],
})
export class DocumentTypeListComponent implements OnInit {
  constructor(
    private documentTypeServ: DocumentTypeService,
    public dialog: MatDialog
  ) {}

  delete: boolean = false;

  dataSource: DocumentType[] | any;
  ngOnInit(): void {
    this.getAllDocumenttypes();
  }

  getAllDocumenttypes() {
    this.documentTypeServ
      .getDocumentTypes()
      .subscribe((data) => (this.dataSource = data));
  }

  editDocumentType(id: number) {
    this.openEditDialog(id);
  }

  openEditDialog(id: number) {
    var dialog = this.dialog.open(EditDocumentTypeComponent, {
      width: '40%',
      enterAnimationDuration: '600ms',
      exitAnimationDuration: '600ms',
      data: {
        title: 'EDITAR TIPO DE DOCUMENTO',
        nameLabel1: 'Codigo',
        nameLabel2: 'Nombre',
        id: id,
      },
    });
    dialog.afterClosed().subscribe((item) => {});
  }

  deleteDocumentType(id: number) {
    var dialog = this.dialog.open(DeleteDocumentTypeComponent, {
      width: '40%',
      enterAnimationDuration: '600ms',
      exitAnimationDuration: '600',
      data: {
        title: 'ELIMINAR TIPO DE DOCUMENTO',
        id: id,
      },
    });
    dialog.afterClosed().subscribe((item) => {});
  }

  displayedColumns: string[] = ['code', 'name', 'actions'];
}
