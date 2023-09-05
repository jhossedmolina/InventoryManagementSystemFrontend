import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusEmployedComponent } from './status-employed.component';

describe('StatusEmployedComponent', () => {
  let component: StatusEmployedComponent;
  let fixture: ComponentFixture<StatusEmployedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusEmployedComponent]
    });
    fixture = TestBed.createComponent(StatusEmployedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
