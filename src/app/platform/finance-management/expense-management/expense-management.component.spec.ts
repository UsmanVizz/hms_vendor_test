import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseManagementComponent } from './expense-management.component';

describe('ExpenseManagementComponent', () => {
  let component: ExpenseManagementComponent;
  let fixture: ComponentFixture<ExpenseManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseManagementComponent]
    });
    fixture = TestBed.createComponent(ExpenseManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
