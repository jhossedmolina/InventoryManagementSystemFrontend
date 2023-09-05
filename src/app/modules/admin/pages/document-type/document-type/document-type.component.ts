import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-document-type',
  templateUrl: './document-type.component.html',
  styleUrls: ['./document-type.component.scss'],
})
export class DocumentTypeComponent {
  title: string = 'TIPOS DE DOCUMENTO';
  background: ThemePalette = 'primary';
}
