import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCountryComponent } from './state-country.component';

describe('StateCountryComponent', () => {
  let component: StateCountryComponent;
  let fixture: ComponentFixture<StateCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateCountryComponent]
    });
    fixture = TestBed.createComponent(StateCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
