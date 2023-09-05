import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalityCountryComponent } from './municipality-country.component';

describe('MunicipalityCountryComponent', () => {
  let component: MunicipalityCountryComponent;
  let fixture: ComponentFixture<MunicipalityCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MunicipalityCountryComponent]
    });
    fixture = TestBed.createComponent(MunicipalityCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
