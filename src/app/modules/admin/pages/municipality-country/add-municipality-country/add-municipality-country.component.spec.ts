import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMunicipalityCountryComponent } from './add-municipality-country.component';

describe('AddMunicipalityCountryComponent', () => {
  let component: AddMunicipalityCountryComponent;
  let fixture: ComponentFixture<AddMunicipalityCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMunicipalityCountryComponent]
    });
    fixture = TestBed.createComponent(AddMunicipalityCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
