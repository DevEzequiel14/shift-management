import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleConfiguration } from './schedule-configuration';

describe('ScheduleConfiguration', () => {
  let component: ScheduleConfiguration;
  let fixture: ComponentFixture<ScheduleConfiguration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleConfiguration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleConfiguration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
