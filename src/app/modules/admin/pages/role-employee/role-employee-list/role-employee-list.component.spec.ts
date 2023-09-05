import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleEmployeeListComponent } from './role-employee-list.component';

describe('RoleEmployeeListComponent', () => {
  let component: RoleEmployeeListComponent;
  let fixture: ComponentFixture<RoleEmployeeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleEmployeeListComponent]
    });
    fixture = TestBed.createComponent(RoleEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
