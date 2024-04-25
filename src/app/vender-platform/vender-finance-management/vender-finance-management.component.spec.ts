import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderFinanceManagementComponent } from './vender-finance-management.component';

describe('VenderFinanceManagementComponent', () => {
  let component: VenderFinanceManagementComponent;
  let fixture: ComponentFixture<VenderFinanceManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenderFinanceManagementComponent]
    });
    fixture = TestBed.createComponent(VenderFinanceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
