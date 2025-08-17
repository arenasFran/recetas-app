export interface Receta {
  id: number;
  nombre: string;
  ingredientes: string[];
  instrucciones: string;
  tiempoPreparacion: number;
  porciones: number;
  fechaCreacion: string;  // string porque JSON no guarda Date directamente
  fechaModificacion: string;
}
