import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysSchedules } from './days-schedules';

describe('DaysSchedules', () => {
  let component: DaysSchedules;
  let fixture: ComponentFixture<DaysSchedules>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaysSchedules]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaysSchedules);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
