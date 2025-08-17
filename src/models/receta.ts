export interface Receta
{
    id: number;
    nombre: string;
    ingredientes: string[];
    instrucciones: string;
    tiempoPreparacion: number; 
    porciones: number;
    fechaCreacion: Date;
    fechaModificacion: Date;
}