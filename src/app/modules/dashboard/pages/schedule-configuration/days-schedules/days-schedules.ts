import { Component } from '@angular/core';
import { DayItem } from './day-item/day-item';

@Component({
  selector: 'app-days-schedules',
  imports: [DayItem],
  templateUrl: './days-schedules.html',
  styleUrl: './days-schedules.css'
})
export class DaysSchedules {
  days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
}
