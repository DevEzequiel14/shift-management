import { Component } from '@angular/core';
import { ItemField } from './item-field/item-field';
import { AddField } from './add-field/add-field';
import { FieldPreview } from './field-preview/field-preview';
import { CampoFormulario } from '../../../../core/interfaces/fields.interface';

@Component({
  selector: 'app-form-configuration',
  imports: [ItemField, AddField, FieldPreview],
  templateUrl: './form-configuration.html',
  styleUrl: './form-configuration.css'
})
export class FormConfiguration {
  campos: CampoFormulario[] = [
    {
      nombre: 'nombre_completo',
      etiqueta: 'Nombre Completo',
      tipo: 'texto',
      placeholder: 'Ingrese su nombre completo',
      requerido: true,
      activo: true
    },
    {
      nombre: 'email',
      etiqueta: 'Email',
      tipo: 'email',
      placeholder: 'ejemplo@email.com',
      requerido: true,
      activo: true
    },
    {
      nombre: 'telefono',
      etiqueta: 'Teléfono',
      tipo: 'tel',
      placeholder: '+54 11 1234-5678',
      requerido: true,
      activo: true
    },
    {
      nombre: 'fecha_nacimiento',
      etiqueta: 'Fecha de Nacimiento',
      tipo: 'fecha',
      placeholder: '',
      requerido: false,
      activo: false
    },
    {
      nombre: 'motivo_consulta',
      etiqueta: 'Motivo de la Consulta',
      tipo: 'select',
      placeholder: '',
      requerido: true,
      activo: true,
      opciones: ['Consulta General', 'Limpieza', 'Revisión', 'Tratamiento', 'Urgencia']
    }
  ];
}
