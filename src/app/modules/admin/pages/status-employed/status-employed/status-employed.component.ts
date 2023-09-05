import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-status-employed',
  templateUrl: './status-employed.component.html',
  styleUrls: ['./status-employed.component.scss'],
})
export class StatusEmployedComponent {
  title: string = 'ESTADOS DE EMPLEADO';
  background: ThemePalette = 'primary';
}
