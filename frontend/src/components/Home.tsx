import { useEffect, useState } from "react";
import { obtenerRecetas } from "../api/recetas";
import type { Receta } from "../models/Receta";

export const Home = () => {
  const [recetas, setRecetas] = useState<Receta[]>([]);

  useEffect(() => {
    const cargarRecetas = async () => {
      try {
        const data = await obtenerRecetas();
        setRecetas(data);
      } catch (error) {
        console.error("Error al cargar recetas", error);
      }
    };
    cargarRecetas();
  }, []);

  return (
    <div>
      <h1>Recetas</h1>
      <ul>
  {recetas.map((r: any) => (
    <li key={r.id}>
      <h3>{r.nombre}</h3>
      <p>Ingredientes: {r.ingredientes.join(", ")}</p>
      <p>Tiempo de preparación: {r.tiempoPreparacion} minutos</p>
      <p>Porciones: {r.porciones}</p>
      <p>Instrucciones: {r.instrucciones}</p>
    </li>
  ))}
</ul>
    </div>
  );
};
