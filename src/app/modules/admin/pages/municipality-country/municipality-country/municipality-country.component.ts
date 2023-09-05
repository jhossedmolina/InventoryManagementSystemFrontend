import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-municipality-country',
  templateUrl: './municipality-country.component.html',
  styleUrls: ['./municipality-country.component.scss'],
})
export class MunicipalityCountryComponent {
  title: string = 'CIUDADES Y MUNICIPIOS';
  background: ThemePalette = 'primary';
}
