import { Component, Input } from '@angular/core';
import { CampoFormulario } from '../../../../../core/interfaces/fields.interface';
import { Button } from '../../../../../shared/components/button/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-field-preview',
  imports: [Button, CommonModule],
  templateUrl: './field-preview.html',
  styleUrl: './field-preview.css'
})
export class FieldPreview {
  @Input() campos: CampoFormulario[] = [];
}
