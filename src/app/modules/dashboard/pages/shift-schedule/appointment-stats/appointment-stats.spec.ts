import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentStats } from './appointment-stats';

describe('AppointmentStats', () => {
  let component: AppointmentStats;
  let fixture: ComponentFixture<AppointmentStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentStats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
