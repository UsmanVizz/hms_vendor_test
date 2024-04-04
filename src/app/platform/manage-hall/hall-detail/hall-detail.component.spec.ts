import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallDetailComponent } from './hall-detail.component';

describe('HallDetailComponent', () => {
  let component: HallDetailComponent;
  let fixture: ComponentFixture<HallDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HallDetailComponent]
    });
    fixture = TestBed.createComponent(HallDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
