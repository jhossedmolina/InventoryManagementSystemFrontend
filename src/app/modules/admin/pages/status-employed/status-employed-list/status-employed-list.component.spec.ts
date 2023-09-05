import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusEmployedListComponent } from './status-employed-list.component';

describe('StatusEmployedListComponent', () => {
  let component: StatusEmployedListComponent;
  let fixture: ComponentFixture<StatusEmployedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusEmployedListComponent]
    });
    fixture = TestBed.createComponent(StatusEmployedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
