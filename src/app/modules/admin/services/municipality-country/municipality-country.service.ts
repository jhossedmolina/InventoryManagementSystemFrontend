import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { MunicipalityCountry } from '../../interfaces/municipality-country';

@Injectable({
  providedIn: 'root',
})
export class MunicipalityCountryService {
  constructor(private http: HttpClient) {}

  url = environment.apiUrl;
  getMunicipalityCountries(): Observable<MunicipalityCountry> {
    return this.http.get<MunicipalityCountry>(this.url + 'MunicipalityCountry');
  }
}
