import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeItem } from './time-item';

describe('TimeItem', () => {
  let component: TimeItem;
  let fixture: ComponentFixture<TimeItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
