import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { StatusEmployed } from '../../interfaces/status-employed';

@Injectable({
  providedIn: 'root',
})
export class StatusEmployedService {
  constructor(private http: HttpClient) {}

  url = environment.apiUrl;
  getDocumentTypes(): Observable<StatusEmployed> {
    return this.http.get<StatusEmployed>(this.url + 'StatusEmployed');
  }
}
