import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderServicesComponent } from './vender-services.component';

describe('VenderServicesComponent', () => {
  let component: VenderServicesComponent;
  let fixture: ComponentFixture<VenderServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenderServicesComponent]
    });
    fixture = TestBed.createComponent(VenderServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
