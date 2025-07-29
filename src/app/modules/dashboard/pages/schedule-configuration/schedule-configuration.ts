import { Component } from '@angular/core';
import { GeneralConfiguration } from './general-configuration/general-configuration';
import { Button } from '../../../../shared/components/button/button';
import { DaysSchedules } from './days-schedules/days-schedules';

@Component({
  selector: 'app-schedule-configuration',
  imports: [GeneralConfiguration, Button, DaysSchedules],
  templateUrl: './schedule-configuration.html',
  styleUrl: './schedule-configuration.css'
})
export class ScheduleConfiguration {

}
