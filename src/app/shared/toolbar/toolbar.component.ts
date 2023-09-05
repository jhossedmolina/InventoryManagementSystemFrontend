import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  public settingItems = [
    {
      label: 'Categorías De Producto',
      icon: 'shopping_bag',
      url: 'product-category',
    },
    {
      label: 'Ciudades Y Municipios',
      icon: 'map',
      url: 'municipality-country',
    },
    {
      label: 'Estados De Empleado',
      icon: 'how_to_reg',
      url: 'status-employed',
    },
    {
      label: 'Estados De Pedido',
      icon: 'work_history',
      url: 'order-status',
    },
    {
      label: 'Marcas De Producto',
      icon: 'store',
      url: 'product-brand',
    },
    {
      label: 'Paises',
      icon: 'flag',
      url: 'state-country',
    },
    {
      label: 'Roles De Empleados',
      icon: 'supervisor_account',
      url: 'role-employee',
    },
    {
      label: 'Tipos De Documento',
      icon: 'badge',
      url: 'document-type',
    },
    {
      label: 'Usuarios De Epleado',
      icon: 'manage_accounts',
      url: 'employee-user',
    },
  ];
}
