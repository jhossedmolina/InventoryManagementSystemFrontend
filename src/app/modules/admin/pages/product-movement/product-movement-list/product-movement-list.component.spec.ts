import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMovementListComponent } from './product-movement-list.component';

describe('ProductMovementListComponent', () => {
  let component: ProductMovementListComponent;
  let fixture: ComponentFixture<ProductMovementListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductMovementListComponent]
    });
    fixture = TestBed.createComponent(ProductMovementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
