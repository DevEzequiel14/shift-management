import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout').then(m => m.Layout),
    children: [
      {
        path: '',
        redirectTo: 'turnos/agenda',
        pathMatch: 'full',
      },
      {
        path: 'turnos/agenda',
        loadComponent: () => import('./pages/shift-schedule/shift-schedule').then(m => m.ShiftSchedule),
      },
      {
        path: 'horarios/configuracion',
        loadComponent: () => import('./pages/schedule-configuration/schedule-configuration').then(m => m.ScheduleConfiguration),
      },
      {
        path: 'formulario/configuracion',
        loadComponent: () => import('./pages/form-configuration/form-configuration').then(m => m.FormConfiguration),
      },
    ]
  }
];
