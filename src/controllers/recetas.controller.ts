import { Receta } from '../models/receta';
import { leerRecetas, guardarRecetas } from "../data/GestionRecetas";

// Obtener todas las recetas
export function obtenerTodasLasRecetas(): Receta[] {
    return leerRecetas();
}

// Obtener receta por ID
export function obtenerRecetaPorId(id: number): Receta | null {
    const recetas = leerRecetas();
    const receta = recetas.find(r => r.id === id);
    return receta || null;
}

// Crear nueva receta
export function crearReceta(datos: Partial<Receta>): Receta {
    if (!datos.nombre || !datos.ingredientes || !datos.instrucciones) {
        throw new Error("Datos incompletos para crear la receta");
    }

    const recetas = leerRecetas();
    const nuevaReceta: Receta = {
        ...datos,
        id: recetas.length > 0 ? recetas[recetas.length - 1].id + 1 : 1,
        fechaCreacion: new Date(),
        fechaModificacion: new Date()
    } as Receta;

    recetas.push(nuevaReceta);
    guardarRecetas(recetas);
    return nuevaReceta;
}

// Actualizar receta
export function actualizarReceta(id: number, datos: Partial<Receta>): Receta | null {
    const recetas = leerRecetas();
    const index = recetas.findIndex(r => r.id === id);
    if (index === -1) return null;

    recetas[index] = {
        ...recetas[index],
        ...datos,
        fechaModificacion: new Date()
    };

    guardarRecetas(recetas);
    return recetas[index];
}

// Eliminar receta
export function eliminarReceta(id: number): Receta | null {
    const recetas = leerRecetas();
    const index = recetas.findIndex(r => r.id === id);
    if (index === -1) return null;

    const eliminada = recetas.splice(index, 1);
    guardarRecetas(recetas);
    return eliminada[0];
}
