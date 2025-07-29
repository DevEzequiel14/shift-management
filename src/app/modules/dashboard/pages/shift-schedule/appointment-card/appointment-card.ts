import { Component, Input } from '@angular/core';
import { StatusBadge } from '../status-badge/status-badge';
import { Button } from '../../../../../shared/components/button/button';

@Component({
  selector: 'app-appointment-card',
  imports: [StatusBadge, Button],
  templateUrl: './appointment-card.html',
  styleUrl: './appointment-card.css'
})
export class AppointmentCard {
  @Input() appointment: any;
}
