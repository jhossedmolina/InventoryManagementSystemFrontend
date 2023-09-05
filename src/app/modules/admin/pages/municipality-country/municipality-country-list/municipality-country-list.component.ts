import { Component, OnInit } from '@angular/core';
import { MunicipalityCountry } from '../../../interfaces/municipality-country';
import { MunicipalityCountryService } from '../../../services/municipality-country/municipality-country.service';

@Component({
  selector: 'app-municipality-country-list',
  templateUrl: './municipality-country-list.component.html',
  styleUrls: ['./municipality-country-list.component.scss'],
})
export class MunicipalityCountryListComponent implements OnInit {
  constructor(private municipalityCountryServ: MunicipalityCountryService) {}

  dataSource: MunicipalityCountry[] | any;
  ngOnInit(): void {
    this.getAllMunicipalityCountries();
  }

  getAllMunicipalityCountries() {
    this.municipalityCountryServ
      .getMunicipalityCountries()
      .subscribe((data) => (this.dataSource = data));
  }

  displayedColumns: string[] = ['code', 'name', 'actions'];
}
