import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCountryListComponent } from './state-country-list.component';

describe('StateCountryListComponent', () => {
  let component: StateCountryListComponent;
  let fixture: ComponentFixture<StateCountryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateCountryListComponent]
    });
    fixture = TestBed.createComponent(StateCountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
