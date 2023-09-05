import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable, catchError, throwError } from 'rxjs';
import { DocumentType } from '../../interfaces/document-type';

@Injectable({
  providedIn: 'root',
})
export class DocumentTypeService {
  constructor(private http: HttpClient) {}

  url = `${environment.apiUrl}DocumentType`;
  getDocumentTypes(): Observable<DocumentType> {
    return this.http.get<DocumentType>(this.url);
  }

  getDocumentTypeById(id: number): Observable<DocumentType> {
    return this.http.get<DocumentType>(`${this.url}/${id}`);
  }

  createDocumentType(documentType: DocumentType): Observable<DocumentType> {
    return this.http
      .post<DocumentType>(this.url, documentType)
      .pipe(catchError(this.handleError));
  }

  updateDocumentType(
    id: number,
    documentType: DocumentType
  ): Observable<DocumentType> {
    if (!id) throw new Error('El id del Tipo De Documento es requerido');
    return this.http
      .put<DocumentType>(`${this.url}/${id}`, documentType)
      .pipe(catchError(this.handleError));
  }

  deleteDocumentType(id: number) {
    return this.http
      .delete(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log('Ha ocurrido un error: ', error.error);
    } else {
      console.error(
        `El Banckend ha retornado el codigo de error ${error.status}, la información enviada fue: `,
        error.error
      );
    }
    return throwError(
      () =>
        new Error('Algo malo sucedio; Por favor, inténtelo de nuevo más tarde.')
    );
  }
}
