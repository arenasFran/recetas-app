import axios from "axios";
import type { Receta } from "../models/Receta";

const API_URL = "http://localhost:3000/api/recetas";

export const obtenerRecetas = async (): Promise<Receta[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const crearReceta = async (receta: Partial<Receta>): Promise<Receta> => {
  const res = await axios.post(API_URL, receta);
  return res.data;
};
