import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductBrandComponent } from './add-product-brand.component';

describe('AddProductBrandComponent', () => {
  let component: AddProductBrandComponent;
  let fixture: ComponentFixture<AddProductBrandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductBrandComponent]
    });
    fixture = TestBed.createComponent(AddProductBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
