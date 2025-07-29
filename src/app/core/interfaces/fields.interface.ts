export type TipoCampo = 'texto' | 'email' | 'tel' | 'fecha' | 'select';

export interface CampoFormulario {
  nombre: string;
  etiqueta: string;
  tipo: TipoCampo;
  placeholder: string;
  requerido: boolean;
  activo: boolean;
  opciones?: string[];
}
