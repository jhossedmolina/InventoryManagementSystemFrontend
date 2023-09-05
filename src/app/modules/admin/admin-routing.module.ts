import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentTypeComponent } from './pages/document-type/document-type/document-type.component';
import { StatusEmployedComponent } from './pages/status-employed/status-employed/status-employed.component';
import { MunicipalityCountryComponent } from './pages/municipality-country/municipality-country/municipality-country.component';
import { OrderStatusComponent } from './pages/order-status/order-status/order-status.component';
import { ProductBrandComponent } from './pages/product-brand/product-brand/product-brand.component';
import { ProductCategoryComponent } from './pages/product-category/product-category/product-category.component';
import { ProductMovementComponent } from './pages/product-movement/product-movement/product-movement.component';
import { RoleEmployeeComponent } from './pages/role-employee/role-employee/role-employee.component';
import { StateCountryComponent } from './pages/state-country/state-country/state-country.component';

const routes: Routes = [
  { path: 'document-type', component: DocumentTypeComponent },
  //{ path: 'employee-user', component: EmployeeUse },
  { path: 'municipality-country', component: MunicipalityCountryComponent },
  { path: 'order-status', component: OrderStatusComponent },
  { path: 'product-brand', component: ProductBrandComponent },
  { path: 'product-category', component: ProductCategoryComponent },
  { path: 'product-movement', component: ProductMovementComponent },
  { path: 'role-employee', component: RoleEmployeeComponent },
  { path: 'state-country', component: StateCountryComponent },
  { path: 'status-employed', component: StatusEmployedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
