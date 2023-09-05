import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalityCountryListComponent } from './municipality-country-list.component';

describe('MunicipalityCountryListComponent', () => {
  let component: MunicipalityCountryListComponent;
  let fixture: ComponentFixture<MunicipalityCountryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MunicipalityCountryListComponent]
    });
    fixture = TestBed.createComponent(MunicipalityCountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
