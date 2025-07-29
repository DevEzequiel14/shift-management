import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CampoFormulario } from '../../../../../core/interfaces/fields.interface';
import { FormsModule } from '@angular/forms';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-item-field',
  imports: [FormsModule, SvgIconComponent],
  templateUrl: './item-field.html',
  styleUrl: './item-field.css'
})
export class ItemField {
  @Input() campo!: CampoFormulario;
  @Output() eliminar = new EventEmitter<void>();

  get opcionesTexto(): string {
    return this.campo.opciones?.join(', ') ?? '';
  }

  set opcionesTexto(valor: string) {
    this.campo.opciones = valor.split(',').map(op => op.trim());
  }

  actualizarOpcionesDesdeTexto(valor: string): void {
    this.opcionesTexto = valor;
  }

  eliminarCampo() {
    this.eliminar.emit();
  }
}
