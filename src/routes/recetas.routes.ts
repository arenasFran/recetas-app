import { Router } from "express";
import {
  obtenerTodasLasRecetas,
  obtenerRecetaPorId,
  crearReceta,
  actualizarReceta,
  eliminarReceta
} from "../controllers/recetas.controller";

const router = Router();

// GET all recetas
router.get("/", (req, res) => {
  try {
    const recetas = obtenerTodasLasRecetas();
    res.json(recetas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las recetas" });
  }
});

// GET receta por ID
router.get("/:id", (req, res) => {
  try {
    const receta = obtenerRecetaPorId(Number(req.params.id));
    if (!receta) return res.status(404).json({ message: "Receta no encontrada" });
    res.json(receta);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la receta" });
  }
});

// POST crear nueva receta
router.post("/", (req, res) => {
  try {
    const receta = crearReceta(req.body);
    res.status(201).json(receta);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la receta" });
  }
});

// PUT actualizar receta
router.put("/:id", (req, res) => {
  try {
    const receta = actualizarReceta(Number(req.params.id), req.body);
    if (!receta) return res.status(404).json({ message: "Receta no encontrada" });
    res.json(receta);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la receta" });
  }
});

// DELETE eliminar receta
router.delete("/:id", (req, res) => {
  try {
    const receta = eliminarReceta(Number(req.params.id));
    if (!receta) return res.status(404).json({ message: "Receta no encontrada" });
    res.json(receta);
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la receta" });
  }
});

export default router;
