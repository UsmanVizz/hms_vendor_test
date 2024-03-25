import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VandorsManagementComponent } from './vandors-management.component';

describe('VandorsManagementComponent', () => {
  let component: VandorsManagementComponent;
  let fixture: ComponentFixture<VandorsManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VandorsManagementComponent]
    });
    fixture = TestBed.createComponent(VandorsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
