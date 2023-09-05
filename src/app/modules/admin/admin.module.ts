import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { DocumentTypeComponent } from './pages/document-type/document-type/document-type.component';
import { AddDocumentTypeComponent } from './pages/document-type/add-document-type/add-document-type.component';
import { DocumentTypeListComponent } from './pages/document-type/document-type-list/document-type-list.component';
import { AddStatusEmployedComponent } from './pages/status-employed/add-status-employed/add-status-employed.component';
import { StatusEmployedComponent } from './pages/status-employed/status-employed/status-employed.component';
import { StatusEmployedListComponent } from './pages/status-employed/status-employed-list/status-employed-list.component';
import { AddMunicipalityCountryComponent } from './pages/municipality-country/add-municipality-country/add-municipality-country.component';
import { MunicipalityCountryComponent } from './pages/municipality-country/municipality-country/municipality-country.component';
import { MunicipalityCountryListComponent } from './pages/municipality-country/municipality-country-list/municipality-country-list.component';
import { AddOrderStatusComponent } from './pages/order-status/add-order-status/add-order-status.component';
import { OrderStatusComponent } from './pages/order-status/order-status/order-status.component';
import { OrderStatusListComponent } from './pages/order-status/order-status-list/order-status-list.component';
import { AddProductBrandComponent } from './pages/product-brand/add-product-brand/add-product-brand.component';
import { ProductBrandComponent } from './pages/product-brand/product-brand/product-brand.component';
import { ProductBrandListComponent } from './pages/product-brand/product-brand-list/product-brand-list.component';
import { AddProductCategoryComponent } from './pages/product-category/add-product-category/add-product-category.component';
import { ProductCategoryComponent } from './pages/product-category/product-category/product-category.component';
import { ProductCategoryListComponent } from './pages/product-category/product-category-list/product-category-list.component';
import { AddProductMovementComponent } from './pages/product-movement/add-product-movement/add-product-movement.component';
import { ProductMovementComponent } from './pages/product-movement/product-movement/product-movement.component';
import { ProductMovementListComponent } from './pages/product-movement/product-movement-list/product-movement-list.component';
import { AddRoleEmployeeComponent } from './pages/role-employee/add-role-employee/add-role-employee.component';
import { RoleEmployeeComponent } from './pages/role-employee/role-employee/role-employee.component';
import { RoleEmployeeListComponent } from './pages/role-employee/role-employee-list/role-employee-list.component';
import { AddStateCountryComponent } from './pages/state-country/add-state-country/add-state-country.component';
import { StateCountryComponent } from './pages/state-country/state-country/state-country.component';
import { StateCountryListComponent } from './pages/state-country/state-country-list/state-country-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditDocumentTypeComponent } from './pages/document-type/edit-document-type/edit-document-type.component';
import { DeleteDocumentTypeComponent } from './pages/document-type/delete-document-type/delete-document-type.component';

@NgModule({
  declarations: [
    DocumentTypeComponent,
    AddDocumentTypeComponent,
    DocumentTypeListComponent,
    AddStatusEmployedComponent,
    StatusEmployedComponent,
    StatusEmployedListComponent,
    AddMunicipalityCountryComponent,
    MunicipalityCountryComponent,
    MunicipalityCountryListComponent,
    AddOrderStatusComponent,
    OrderStatusComponent,
    OrderStatusListComponent,
    AddProductBrandComponent,
    ProductBrandComponent,
    ProductBrandListComponent,
    AddProductCategoryComponent,
    ProductCategoryComponent,
    ProductCategoryListComponent,
    AddProductMovementComponent,
    ProductMovementComponent,
    ProductMovementListComponent,
    AddRoleEmployeeComponent,
    RoleEmployeeComponent,
    RoleEmployeeListComponent,
    AddStateCountryComponent,
    StateCountryComponent,
    StateCountryListComponent,
    EditDocumentTypeComponent,
    DeleteDocumentTypeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
