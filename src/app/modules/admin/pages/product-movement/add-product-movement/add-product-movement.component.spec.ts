import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductMovementComponent } from './add-product-movement.component';

describe('AddProductMovementComponent', () => {
  let component: AddProductMovementComponent;
  let fixture: ComponentFixture<AddProductMovementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductMovementComponent]
    });
    fixture = TestBed.createComponent(AddProductMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
