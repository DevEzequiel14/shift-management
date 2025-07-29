import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { AppointmentStats } from './appointment-stats/appointment-stats';
import { AppointmentCard } from './appointment-card/appointment-card';

@Component({
  selector: 'app-shift-schedule',
  imports: [SvgIconComponent, AppointmentStats, AppointmentCard],
  templateUrl: './shift-schedule.html',
  styleUrl: './shift-schedule.css'
})
export class ShiftSchedule {

  appointments = [
    {
      initials: 'JP',
      name: 'Juan Pérez',
      status: 'confirmado',
      time: '09:00',
      duration: '30 min',
      reason: 'Control de ortodoncia',
      phone: '1123456789',
      email: 'juan.perez@gmail.com',
      notes: 'Paciente puntual, trae radiografía.'
    },
    {
      initials: 'MR',
      name: 'María Rodríguez',
      status: 'pendiente',
      time: '09:45',
      duration: '45 min',
      reason: 'Limpieza dental',
      phone: '1134567890',
      email: 'maria.rodriguez@hotmail.com',
      notes: ''
    },
    {
      initials: 'LC',
      name: 'Lucía Cáceres',
      status: 'cancelado',
      time: '10:45',
      duration: '1 hora',
      reason: 'Extracción de muela',
      phone: '1145678901',
      email: 'lucia.caceres@gmail.com',
      notes: 'Reprogramar dentro de la semana'
    },
    {
      initials: 'FT',
      name: 'Federico Torres',
      status: 'confirmado',
      time: '12:00',
      duration: '30 min',
      reason: 'Consulta general',
      phone: '1156789012',
      email: 'federico.torres@outlook.com',
      notes: ''
    },
    {
      initials: 'AV',
      name: 'Ana Vázquez',
      status: 'confirmado',
      time: '13:00',
      duration: '1 hora',
      reason: 'Colocación de corona',
      phone: '1167890123',
      email: 'ana.vazquez@gmail.com',
      notes: 'Paciente nueva'
    }
  ];


  fecha = new Date();

}
