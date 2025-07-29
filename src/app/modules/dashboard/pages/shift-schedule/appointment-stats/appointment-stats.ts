import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-stats',
  imports: [],
  templateUrl: './appointment-stats.html',
  styleUrl: './appointment-stats.css'
})
export class AppointmentStats {
  confirmados = 2;
  pendientes = 1;
  cancelados = 1;
}
