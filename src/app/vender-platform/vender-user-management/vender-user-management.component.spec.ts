import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderUserManagementComponent } from './vender-user-management.component';

describe('VenderUserManagementComponent', () => {
  let component: VenderUserManagementComponent;
  let fixture: ComponentFixture<VenderUserManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenderUserManagementComponent]
    });
    fixture = TestBed.createComponent(VenderUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
