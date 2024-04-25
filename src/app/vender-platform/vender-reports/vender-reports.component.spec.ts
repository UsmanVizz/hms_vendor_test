import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderReportsComponent } from './vender-reports.component';

describe('VenderReportsComponent', () => {
  let component: VenderReportsComponent;
  let fixture: ComponentFixture<VenderReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenderReportsComponent]
    });
    fixture = TestBed.createComponent(VenderReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
