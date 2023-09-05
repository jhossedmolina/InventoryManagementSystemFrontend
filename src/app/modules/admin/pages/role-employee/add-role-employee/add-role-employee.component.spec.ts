import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoleEmployeeComponent } from './add-role-employee.component';

describe('AddRoleEmployeeComponent', () => {
  let component: AddRoleEmployeeComponent;
  let fixture: ComponentFixture<AddRoleEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRoleEmployeeComponent]
    });
    fixture = TestBed.createComponent(AddRoleEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
