import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStatusEmployedComponent } from './add-status-employed.component';

describe('AddStatusEmployedComponent', () => {
  let component: AddStatusEmployedComponent;
  let fixture: ComponentFixture<AddStatusEmployedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStatusEmployedComponent]
    });
    fixture = TestBed.createComponent(AddStatusEmployedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
