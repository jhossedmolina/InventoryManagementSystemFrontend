import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStateCountryComponent } from './add-state-country.component';

describe('AddStateCountryComponent', () => {
  let component: AddStateCountryComponent;
  let fixture: ComponentFixture<AddStateCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStateCountryComponent]
    });
    fixture = TestBed.createComponent(AddStateCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
